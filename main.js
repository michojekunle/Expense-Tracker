
//assigning all elements to manipulate to a variable. 
const balanceEl = document.querySelector('#total-balance');
const incomeEl = document.querySelector('#income-amount');
const expenseEl = document.querySelector('#expense-amount');
const historyEl = document.querySelector('#history');
const form = document.querySelector('#form-container');
const transactionInput = document.querySelector('#transaction-input');
const amountInput = document.querySelector('#amount-input');
const submitTransactionBtn = document.querySelector('#submit-transaction');
const deleteButton = document.querySelector('.delete-transaction');

//declaring history
let history;

//declaring mainArray containing amount of all transactions.
const mainArray = [];

//function to calculate income.
function calculateIncome(incomeArray) {
    let total = 0;
    incomeArray.forEach(num => {
        total += num;
    });
    return total;    
}//end function calculateIncome.


//function to calculte expense.
function calculateExpense(expenseArray) {
    let total = 0;
    expenseArray.forEach(num => {
        total += num;
    })    
    return total;
} //end function calaculateExpense


//function to calculate Balance
function calculateBalance(mainArray) {
    let incomeArray = [];    
    let expenseArray = [];
    
    mainArray.forEach(number => {
        if (number > 0) {
            incomeArray.push(number);
        }
        else {
            expenseArray.push(number);
        }
    });

    let income = calculateIncome(incomeArray);
    let expense = calculateExpense(expenseArray);
    let balance = income + expense;

    balanceEl.textContent = `₦${balance}`;
    incomeEl.textContent =  `₦${income}`;
    expenseEl.textContent = `₦${expense}`;   
} // done with calculating balance function.


//function to add to History 
function addToHistory(transaction, amount) {
    //creating histroy element
    history = document.createElement('div');
    history.classList.add('in-ex');

    if (amount > 0) {
        history.classList.add('income');
    } else {
        history.classList.add('expense');
    }
       
    history.innerHTML = `
    <button id="delete-transaction">X</button>
    <div class="content">
        <p>${transaction}</p>
        <p>${amount}</p>
    </div>`
} // end addToHistory

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (transactionInput==='' || amountInput==='') {
        alert('Please fill in values for transaction and amount');
    } else {
        mainArray.push(amountInput);
        calculateBalance(mainArray);
        addToHistory(transactionInput, amountInput);
    }
});

history.addEventListener('hover', () => {
    deleteButton.classList.add('show');
});

deleteButton.addEventListener('click', () => {
    let amount = deleteButton.nextElementSibling.lastChild.textContent;
    for(let i=0; 1<mainArray.length; i++){
        if(mainArray[i] === amount){
            mainArray.splice(i, 1);
            break;
        }    
    }
    calculateBalance(mainArray);

    deleteButton.parentElement.remove();
});