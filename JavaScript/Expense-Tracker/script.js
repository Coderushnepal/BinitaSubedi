document.body.style.backgroundcolor = "#f7f7f7";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";
document.body.style.fontFamily = "'lato', sans-serif";
//heading
const heading = document.createElement( "h2" );
heading.innerHTML = "Expense Tracker";
//main container
const mainContainer = document.createElement( "div" )
mainContainer.className = "container"
mainContainer.style.margin = "30px auto";
mainContainer.style.width = "350px";
//container

const h4 = document.createElement( "h4" );
h4.innerHTML = "Your Balance";
h4.style.margin = "0";
h4.style.textTransform = "uppercase";
const h1 = document.createElement( "h1" )
h1.innerHTML = "$0.00";
h1.id = "balance";
h1.style.letterSpacing = "1px";
h1.style.width = "350px";

//income Expense container
const incExp = document.createElement( "div" );
incExp.className = "inc-Exp-container";
incExp.style.backgroundColor = "#fff";
incExp.style.boxShadow = "0 1px 3px rgba( 0, 0, 0, 0.12 ), 0 1px 2px rgba( 0, 0, 0, 0.24 )";
incExp.style.padding = "20px";
incExp.style.display = "flex";
incExp.style.justifyContent = "space-between";
incExp.style.margin = "20px 0";

//income
const incExpdiv = document.createElement( "div" );
incExpdiv.style.flex = "1";
incExpdiv.style.textAlign = "center";
incExpdiv.style.borderRight = "1px solid #dedede";

const h4Income = document.createElement( "h4" );
h4Income.innerHTML = "Income"
h4Income.style.margin = "0";
h4Income.style.textTransform = "uppercase";
const positiveVal = document.createElement( "p" )
positiveVal.id = "money-minus";
positiveVal.className = "money_plus";
positiveVal.innerHTML = "+$0.00"
positiveVal.style.color = "#2ecc71";
positiveVal.style.fontSize = "20px";
positiveVal.style.letterSpacing = "1px";
positiveVal.style.margin = "5px 0";

//Expense
const incExpdivE = document.createElement( "div" )
incExpdivE.style.flex = "1";
incExpdivE.style.textAlign = "center";


const h4Expense = document.createElement( "h4" );
h4Expense.innerHTML = "Expense"
h4Expense.style.margin = "0";
h4Expense.style.textTransform = "uppercase";
const negativeVal = document.createElement( "p" )
negativeVal.id = "money-minus";
negativeVal.className = "money_minus";
negativeVal.innerHTML = "-$0.00"
negativeVal.style.color = "#c0392b";
negativeVal.style.fontSize = "20px";
negativeVal.style.letterSpacing = "1px";
negativeVal.style.margin = "5px 0";

//history
const history = document.createElement( "h3" );
history.innerHTML = "History";
history.style.borderBottom = "1px solid #bbb";
history.style.paddingBottom = "10px";
history.style.margin = "40px 0 10px";

//list of history
const list = document.createElement( "ul" );
list.id = "list"
list.className = "list"
list.style.listStyleType = "none";
list.style.padding = "0";
list.style.marginBottom = "40px";




const list_li = document.createElement( "li" )
list_li.style.backgroundColor = "#fff";
list_li.style.boxShadow = "0 2px 4px rgba( 0, 0, 0, 0.12 ), 0 2px 3px rgba( 0, 0, 0, 0.24 )";
list_li.style.color = "#333"
list_li.style.display = "flex";
list_li.style.justifycontent = "space - between";
list_li.style.position = "relative";
list_li.style.padding = "10px";
list_li.style.margin = "10px 0";

const li_plus = document.createElement( "li" )
li_plus.style.borderRight = "5px solid #2ecc71";


const li_minus = document.createElement( "li" )
li_minus.style.borderRight = "5px solid #c0392b";

const transaction = document.createElement( "h3" );
transaction.innerHTML = "Add new transaction"
transaction.style.borderBottom = "1px solid #bbb";
transaction.style.paddingBottom = "10px";
transaction.style.margin = "40px 0 10px";

//form 

const Form = document.createElement( "form" )
Form.id = "form"

const form_div = document.createElement( "div" )
form_div.className = "form-control";

const label_text = document.createElement( "label" )
label_text.innerHTML = "Text"
label_text.style.display = "inline-block";
label_text.style.margin = "10px 0"

const text_input = document.createElement( "input" )
text_input.type = "text";
text_input.id = "text";
text_input.placeholder = "Enter text..."
text_input.style.border = "1px solid #dedede";
text_input.style.border = "radius: 2px";
text_input.style.display = "block";
text_input.style.fontSize = "16px";
text_input.style.padding = "10px";
text_input.style.width = "100%";


const label_Amount = document.createElement( "label" )

label_Amount.innerHTML = "Amount <br>(negative - expense, positive - income)"

label_Amount.style.display = "inline-block";
label_Amount.style.margin = "10px 0"

const number_input = document.createElement( "input" )
number_input.type = "number";
number_input.id = "amount";
number_input.placeholder = "Enter Amount..."
number_input.style.border = "1px solid #dedede";
number_input.style.border = "radius: 2px";
number_input.style.display = "block";
number_input.style.fontSize = "16px";
number_input.style.padding = "10px";
number_input.style.width = "100%";
const button = document.createElement( "button" )
button.className = "btn"
button.type = "button"
button.innerHTML = "Add transaction"
button.style.cursor = "pointer";
button.style.backgroundColor = "#9c88ff";
button.style.color = "#fff";
button.style.border = "0";
button.style.display = "block";
button.style.fontsize = "16px";
button.style.margin = "10px 0 30px";
button.style.padding = "10px";
button.style.width = "100%";
button.style.borderRadius = "3px";
// button.onclick = addTransactions
mainContainer.appendChild( h4 )
mainContainer.appendChild( h1 )
mainContainer.appendChild( incExp )
incExp.appendChild( incExpdiv )
incExpdiv.appendChild( h4Income )
incExpdiv.appendChild( positiveVal )
incExp.appendChild( incExpdivE )
incExpdivE.appendChild( h4Expense )
incExpdivE.appendChild( negativeVal )
mainContainer.appendChild( history )
mainContainer.appendChild( list )
list.appendChild( list_li )
list_li.appendChild( li_plus )
list_li.appendChild( li_minus )
mainContainer.appendChild( transaction )
mainContainer.appendChild( Form )
Form.appendChild( form_div )
form_div.appendChild( label_text )
form_div.appendChild( text_input )
form_div.appendChild( label_Amount )
// label_Amount.appendChild( break_1 )
form_div.appendChild( number_input )
Form.appendChild( button )



document.body.appendChild( heading )
document.body.appendChild( mainContainer )




const balance = document.getElementById( 'balance' );
const money_plus = document.getElementById( 'money-plus' );
const money_minus = document.getElementById( 'money-minus' );
const List = document.getElementById( 'list' );
const form = document.getElementById( 'form' );
const text = document.getElementById( 'text' );
const amount = document.getElementById( 'amount' );



const localStorageTransactions = JSON.parse(
  localStorage.getItem( 'transactions' )
);

let transactions =
  localStorage.getItem( 'transactions' ) !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction( e ) {
  e.preventDefault();

  if ( text.value == '' || amount.value == '' ) {
    alert( 'Please add a text and amount' );
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push( transaction );

    addTransactionDOM( transaction );

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor( Math.random() * 100000000 );
}

// Add transactions to DOM list
function addTransactionDOM( transaction ) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement( 'li' );

  // Add class based on value
  item.classList.add( transaction.amount < 0 ? 'minus' : 'plus' );

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id
    })">x</button>
  `;

  list.appendChild( item );
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map( transaction => transaction.amount );

  const total = amounts
    .reduce( ( acc, item ) => ( acc += item ), 0 )
    .toFixed( 2 );

  const income = amounts
    .filter( item => item > 0 )
    .reduce( ( acc, item ) => ( acc += item ), 0 )
    .toFixed( 2 );

  const expense = amounts
    .filter( item => item < 0 )
    .reduce( ( acc, item ) => ( acc += item ), 0 ) * -1
      .toFixed( 2 );

  h1.innerText = `$${total}`;
  positiveVal.innerText = `$${income}`;
  negativeVal.innerText = `$${expense}`;
}

// Remove transaction by ID
function removeTransaction( id ) {
  transactions = transactions.filter( transaction => transaction.id !== id );

  updateLocalStorage();

  init();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem( 'transactions', JSON.stringify( transactions ) );
}

// Init app
function init() {
  List.innerHTML = '';

  transactions.forEach( addTransactionDOM );
  updateValues();
}

init();

button.addEventListener( 'click', addTransaction );

