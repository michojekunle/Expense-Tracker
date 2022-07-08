
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


//declaring mainArray containing amount of all transactions.
const mainArray = [];

//Store class:handles storage
// class Store {
//     static getBooks() {
//         let books;

//         if(localStorage.getItem('books')===null){
//             books = [];
//         } else {
//             books = JSON.parse(localStorage.getItem('books'));
//         }
//         return books;
//     }
    
//     static addBook(book) {
//         const books = Store.getBooks();

//         books.push(book);

//         localStorage.setItem('books', JSON.stringify(books));
//     }

//     static removeBook(isbn) {
//         const books = Store.getBooks();

//         books.forEach((book, index) => {
//             if (book.isbn === isbn){
//                 books.splice(index, 1);
//             }
//         })

//         localStorage.setItem('books', JSON.stringify(books));
//     }
// }

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

        mainArray.push(amountInput.value);
        console.log(mainArray);
        calculateBalance(mainArray);
        addToHistory(transactionInput.value, amountInput.value);
        transactionInput.value = '';
        amountInput.value = '';
});

console.log(mainArray);


function deleteHistory(amount) {
    console.log(amount);
    // console.log(amount);
    // for(let i=0; 1<mainArray.length; i++){
    //     if(mainArray[i] === amount){
    //         mainArray.splice(i, 1);
    //         break;
    //     }    
    // }
    // calculateBalance(mainArray);

    // deleteButton.parentElement.remove();
}