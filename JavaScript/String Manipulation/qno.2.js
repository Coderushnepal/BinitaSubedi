// Create a function that takes a word and returns the new word without including the first character.

//   Examples

// newWord( "apple" ) ➞ "pple"

// newWord( "cherry" ) ➞ "herry"

// newWord( "plum" ) ➞ "lum"

// function name1( b ) {
//   return b.slice( 1 )
// }
// console.log( name1( "apple" ) );

// function word( w ) {
//   return w.slice( 1 )
// }
// console.log( word( "herry" ) )

function newword( nw ) {
  return nw.slice( 1 )
}
console.log( newword( "plum" ) )

// var a = "apple"
// a = a.slice( 1 )
// console.log( a );