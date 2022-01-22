// Write a function to render the following pattern in the console:
// * * * * *
// * * * *
// * * *
// * *
// *

//   The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.

// for ( var i = 5; i > 0; i-- ) {
//   var stars = "";
//   for ( var j = 0; j < i; j++ ) {
//     stars += "*";
//   }
//   console.log( stars );
// }



function abc( n ) {
  for ( var i = n; i > 0; i-- ) {
    var starts = "";

    for ( var j = 0; j < i; j++ ) {
      starts += "*";
    }
    console.log( starts );
  }
}
abc( 5 );



// function abc( n ) {
//   for ( var i = 1; i <= n; i++ ) {
//     var starts = "";

//     for ( var j = 0; j < i; j++ ) {
//       starts += "*";
//     }
//     console.log( starts );
//   }
// }
// abc( 5 );