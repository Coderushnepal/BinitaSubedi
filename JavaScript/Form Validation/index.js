const form = document.getElementById( 'form' );
const username = document.getElementById( 'username' );
const email = document.getElementById( 'email' );
const password = document.getElementById( 'password' );
const password2 = document.getElementById( 'password2' );

const btn = document.getElementById( "btn" )
btn.addEventListener( "click", () => {
  validation();
} )




function validation() {


  var usernameValue = username.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();
  var password2Value = password2.value.trim();



  var usercheck = /^[A-Za-z. ]{3,30}$/;
  var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;


  if ( usercheck.test( usernameValue ) ) {


    setSuccess( username )
  } else {

    setError( username, 'Invalid User Name' )
  }

  if ( emailcheck.test( emailValue ) ) {
    setSuccess( email )
  } else {
    setError( email, "Invalid Email Address" )
  }

  if ( passwordcheck.test( passwordValue ) ) {
    setSuccess( password )
  } else {
    setError( password, "Password should atleast be 8 chars long and contains all characters" )
  }

  if ( passwordcheck.test( passwordValue ) && ( passwordValue == password2Value ) ) {
    setSuccess( password2 )
  } else {
    setError( password2, "Password Doesnot Match" )
  }

}

const setError = ( element, message ) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector( ".error" )

  errorDisplay.innerText = message;
  inputControl.classList.add( 'error' )
  inputControl.classList.remove( 'success' )
}


const setSuccess = ( element ) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector( ".error" )

  errorDisplay.innerText = "";
  inputControl.classList.add( 'success' )
  inputControl.classList.remove( 'error' )
}
