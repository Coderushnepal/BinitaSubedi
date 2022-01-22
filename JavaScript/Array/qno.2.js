// Filter out Strings from an Array
// Create a function that takes an array of non - negative integers and strings and return a new array without the strings.

//   filterArray( [1, 2, "a", "b"] ) ➞[1, 2]

// filterArray( [1, "a", "b", 0, 15] ) ➞[1, 0, 15]

// filterArray( [1, 2, "aasf", "1", "123", 123] ) ➞[1, 2, 123]


var a = [1, "apple", "hello", 2, 4, 5, 6, "int"];


function abc( b ) {
  return b.filter( Element => typeof ( Element ) != "string" )
}
console.log( abc( a ) )