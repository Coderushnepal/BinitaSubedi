// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters(in other words, it has a set size of 1 ).

//   Examples

// identicalFilter( ["88", "999", "22", "545", "133"] ) ➞["88", "999", "22"]
// identicalFilter( ["xxxx", "oxo", "xox", "ooxxoo", "oxo"] ) ➞[xxxx]


// Note * A string with a single character is trivially counted as a string with repeating identical characters. * If there are no strings with repeating identical characters, return an empty array( see example #3 ).

var identical = ["88", "999", "22", "545", "133"]
var final = identical.filter( filter );


// for ( var i = 1; i < identical.length; i++ ) {
//   if ( identical[i] == identical[0] ) {
//     console.log( "identical" )
//   }
//   else
//     console.log( "nonidentical" )

// }

function filter( x ) {
  for ( var i = 1; i < x.length; i++ ) {
    if ( x[i] != x[0] ) {
      return "";
    }
  }
  return x;
}
console.log( final );