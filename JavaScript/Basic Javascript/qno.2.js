// Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *.

// Examples
// censor("The code is fourty") ➞ "The code is ******"
// censor("Two plus three is five") ➞ "Two plus ***** is five"
// censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"

// Note

// Don't censor words with exactly four characters.
// If all words have four characters or less, return the original string.
// The amount of * is the same as the length of the word.


// var sentence = "The code is fourty";

// var words = sentence.split( " " );
// console.log( words );
// words.forEach( ( Element, index ) => {
//   if ( words[index].length > 4 ) {
//     words[index] = drawstar();
//     function drawstar() {
//       var starts = "";
//       for ( var i = 0; i < words[index].length; i++ ) {
//         starts += "*";
//       }
//       return starts;
//     }
//   }
// } )
// console.log( ...words );


function sentence( sn ) {
  var words = sn.split( " " );
  console.log( words );
  words.forEach( ( Element, index ) => {
    if ( words[index].length > 4 ) {
      words[index] = drawstar();
      function drawstar() {
        var starts = "";
        for ( var i = 0; i < words[index].length; i++ ) {
          starts += "*";
        }
        return starts;
      }

    }
  } )
  console.log( ...words );
}

sentence( "Two plus three is five" )