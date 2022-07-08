
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
const clearAll = document.querySelector('#clearAll');

//declaring mainArray containing amount of all transactions.
const mainArray = [];

getHistoryFromLocalStorage();

calculateBalance(mainArray);

function saveHistoryToLocalStorage(transaction, amount) {
    localStorage.setItem(transaction, amount);
    console.log(localStorage);

    addToHistory(transaction, amount);
    calculateBalance(mainArray);
}


function getHistoryFromLocalStorage() {

    for(let i = 0;i<localStorage.length;i++) {
        let a = localStorage.key(i);
        mainArray.push(localStorage.getItem(a));

        console.log(mainArray);

        addToHistory(localStorage.key(i), localStorage.getItem(a));
    }

    calculateBalance(mainArray);
}


//function to calculate income.
function calculateIncome(incomeArray) {
    let total = 0;
    incomeArray.forEach(num => {
        total += num;
    });
    return total;    
}//end function calculateIncome.


//function to calculate expense.
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
    //creating history element
    const history = document.createElement('div');
    history.classList.add('histories');
    
    history.innerHTML = `<p>${transaction}</p>
                         <p id="amount">${amount}</p>`;
    
    // history.addEventListener('dblclick', deleteHistory(document.querySelector('#amount')));

    if (amount > 0) {
        history.classList.add('income');
    } else {
        history.classList.add('expense');
    }

    historyEl.appendChild(history);
} // end addToHistory

form.addEventListener('submit', (e) => {
    e.preventDefault();
        console.log(transactionInput.value);
        console.log(amountInput.value);

        saveHistoryToLocalStorage(transactionInput.value, amountInput.value);

        transactionInput.value = '';
        amountInput.value = '';
        location.reload();
});

clearAll.addEventListener('click', () => {
    
})