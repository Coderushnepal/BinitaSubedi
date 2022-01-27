const wordEl = document.getElementById( "word" );
const wrongLettersEl = document.getElementById( "wrong-letter" );
const playAgainBtn = document.getElementById( "play-button" );
const popup = document.getElementById( "poup-container" );
const notofication = document.getElementById( "notification-container" );
const finalMessage = document.getElementById( "final-message" );
const bodypart = document.querySelectorAll( "body-part" );

const words = [
  "Charades",
  "opportunity",
  "entertaining",
  "Brazil",
  "experience",
  "Canada",
  "sparkle",
  "education",
  "scrabble",
  "alphabet",
  "Argentina",
  "Daffodils",
  "children",
  "challenge",
]

let selectedWord = words[Math.floor( Math.random() * words.length )];
const correctLetters = [];
const wrongLetters = [];

//display word function 
function displayWord() {
  wordEl.innerHTML = `${selectedWord.split( "" ).map( ( letter ) => `<span class="letter"> ${correctLetters.includes( letter ) ? letter : ""} </span>` )

    .join( "" )}
`;
  const innerWord = wordEl.innerText.replace( /\n/g, "" );
  if ( innerWord === selectedWord ) {
    finalMessage.innerText = "Congratulation You Won:)";
    popup.style.display = "flex";
  }
}
//wrong letter Function
function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
  ${wrongLetters.map( ( letter ) => `<span>${letter}</span>` )}
  `;
  //display bodypart
  bodypart.forEach( ( part, index ) => {
    const errors = wrongLetters.length;
    if ( index < errors ) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  } );

  //check if lost
  if ( wrongLetters.length === bodypart.length ) {
    finalMessage.innerText = "Unfortunately You Lost:(";
    popup.style.display = "flex";
  }

}
//show notification
function showNotification() {
  notification.classList.add( "show" ); setTimeout
  setTimeout( () => {
    notification.classList.remove( "show" );
  }, 2000 );
}
// keyDown Letter press
window.addEventListener( "Keydown", ( e ) => {
  if ( e.KeyCode >= 65 && e.keyCode <= 90 ) {
    const letter = e.key;
    // console.log(letter)
    if ( selectedWord.includes( letter ) ) {
      if ( !correctLetters.includes( letters ) ) {
        correctLetters.push( letter );
        displayWord();

      }
      else {
        showNotification();
      }
    } else {
      if ( !wrongLetters.includes( letter ) ) {
        wrongLetters.push( letter );
        updateWrongLettersEl();
      }

    }
  }
} );
//play again
playAgainBtn.addEventListener( "click", () => {
  correctLetters.splice( 0 );
  wrongLetters.splice( 0 );
  selectedWord = words[Math.floor( Math.random() * words.length )];
  displayWord();
  updateWrongLettersEl();
  popup.style.display = "none";

} );

displayword();



