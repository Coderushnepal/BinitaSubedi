const mainContainer = document.createElement( "div" );
mainContainer.className = "container";
const input_box = document.createElement( "div" );
input_box.className = "input_box";
const h3 = document.createElement( "h3" );
h3.innerHTML = "Password";
const password_box = document.createElement( "input" );
password_box.className = "password-pwd";
password_box.id = "password-field";
password_box.type = "password";
password_box.placeholder = "Enter Your Password";

const eye = document.createElement( "em" );
eye.classList.add( "fa", "fa-eye" );
eye.id = "pass-status";
eye.ariaHidden = "true";
eye.onclick = function () {
  viewPassword();
}

const forgetPwDiv = document.createElement( "div" );
const pwSpan = document.createElement( "span" )
const fgLink = document.createElement( "a" );
fgLink.id = "forgetPassword";
fgLink.innerHTML = "Forget Password ?";

const submitBtn = document.createElement( "button" );
submitBtn.type = "button";
submitBtn.innerHTML = "Next";
submitBtn.onclick = function () {
  handleSubmit();
}




input_box.appendChild( h3 );
input_box.appendChild( password_box );
input_box.appendChild( eye );
mainContainer.appendChild( input_box );

pwSpan.appendChild( fgLink );
forgetPwDiv.appendChild( pwSpan );
forgetPwDiv.appendChild( submitBtn );

mainContainer.appendChild( forgetPwDiv );
document.body.appendChild( mainContainer );

function viewPassword() {
  var passwordInput = document.getElementById( 'password-field' );
  var passStatus = document.getElementById( 'pass-status' );

  if ( passwordInput.type == 'password' ) {
    passwordInput.type = 'text';
    passStatus.className = 'fa fa-eye-slash';

  }
  else {
    passwordInput.type = 'password';
    passStatus.className = 'fa fa-eye';
  }


}

function handleSubmit() {
  var passwordInput = document.getElementById( "password-field" ).value;
  if ( passwordInput == "" ) {
    window.alert( "Password Cannot be Null" );
  } else if ( passwordInput.length < 8 ) {
    window.alert( "Password Needs to be atleast 8 chars long" );
  } else {
    console.log( passwordInput );
  }
}


