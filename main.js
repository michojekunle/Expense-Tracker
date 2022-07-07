
//assigning all elements to manipulate to a variable. 
const balanceEl = document.querySelector('#total-balance');
const incomeEl = document.querySelector('#income-amount');
const expenseEl = document.querySelector('#expense-amount');
const historyEl = document.querySelector('#history');
const form = document.querySelector('#form-container');
const transactionInput = document.querySelector('#transaction-input').value;
const amountInput = document.querySelector('#amount-input').value;
const submitTransactionBtn = document.querySelector('#submit-transaction');

const content = document.querySelector('.content');

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

    balanceEl.innerHTML = `₦${balance}`;
    incomeEl.innerHTML =  `₦${income}`;
    expenseEl.innerHTML = `₦${expense}`;   
} // done with calculating balance function.


//function to add to History 
function addToHistory(transaction, amount) {
    //creating histroy element
    history = document.createElement('div');
    history.classList.add('histories');

    history.innerHTML = `
    <button id="delete-transaction">X</button>
    <div class="content">
        <p>${transaction}</p>
        <p>${amount}</p>
    </div>`;

    if (amount > 0) {
        content.classList.add('income');
    } else {
        content.classList.add('expense');
    }

    console.log(history);
    historyEl.appendChild(history);
} // end addToHistory

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
        console.log(`Values for transaction and amount are ${transactionInput} and ${amountInput} `);
        mainArray.push(amountInput);
        calculateBalance(mainArray);
        addToHistory(transactionInput, amountInput);
});

// history.addEventListener('hover', () => {
//     deleteButton.classList.add('show');
// });

document.querySelector('#delete-transaction').addEventListener('click', () => {
    let amount = deleteButton.nextElementSibling.lastChild.innerHTML;
    for(let i=0; 1<mainArray.length; i++){
        if(mainArray[i] === amount){
            mainArray.splice(i, 1);
            break;
        }    
    }
    calculateBalance(mainArray);

    deleteButton.parentElement.remove();
});