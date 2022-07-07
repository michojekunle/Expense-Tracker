
//assigning all elements to be manipulated to variables. 
const balanceEl = document.querySelector('#total-balance');
const incomeEl = document.querySelector('#income-amount');
const expenseEl = document.querySelector('#expense-amount');
const historyEl = document.querySelector('#history');
const form = document.querySelector('#form-container');
const transactionInput = document.querySelector('#transaction-input');
const amountInput = document.querySelector('#amount-input');
const submitTransactionBtn = document.querySelector('#submit-transaction');
const deleteTransaction = document.querySelector('.delete');

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
        number = +number;
        if (number > 0) {
            incomeArray.push(number);
            console.log(incomeArray);
        }
        else {
            expenseArray.push(number);
            console.log(expenseArray);
        }
    });

    let income = calculateIncome(incomeArray);
    let expense = calculateExpense(expenseArray);
    let balance = income + expense;

    balanceEl.innerHTML = `₦${balance}`;
    incomeEl.innerHTML =  `₦${income}`;
    expenseEl.innerHTML = `₦${Math.abs(expense)}`;   
} // done with calculating balance function.


//function to add to History 
function addToHistory(transaction, amount) {
    //creating histroy element
    history = document.createElement('div');
    history.classList.add('histories');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = `X`;

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `<p>${transaction}</p>
                         <p>${amount}</p>`;
    
    if (amount > 0) {
        content.classList.add('income');
    } else {
        content.classList.add('expense');
    }

    history.appendChild(deleteButton);
    history.appendChild(content);

    console.log(history);

    historyEl.appendChild(history);
} // end addToHistory

form.addEventListener('submit', (e) => {
    e.preventDefault();
        console.log(transactionInput.value);
        console.log(amountInput.value);

        mainArray.push(amountInput.value);
        console.log(mainArray);
        calculateBalance(mainArray);
        addToHistory(transactionInput.value, amountInput.value);
        transactionInput.value = '';
        amountInput.value = '';
});

console.log(mainArray);


// history.addEventListener('hover', () => {
//     deleteButton.classList.add('show');
// });

const deleteHistory = () => {
    let amount = deleteButton.nextElementSibling.lastChild.innerHTML;
    console.log(amount);
    for(let i=0; 1<mainArray.length; i++){
        if(mainArray[i] === amount){
            mainArray.splice(i, 1);
            break;
        }    
    }
    calculateBalance(mainArray);

    deleteButton.parentElement.remove();
};

deleteTransaction.addEventListener('click', deleteHistory());

