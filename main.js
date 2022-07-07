
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

//creating histroy element
let history = document.createElement('div');

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

    
}