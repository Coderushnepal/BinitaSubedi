// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key - value pair.

//   Examples

// toArray( { a: 1, b: 2 } ) ➞[["a", 1], ["b", 2]]
// toArray( { shrimp: 15, tots: 12 } ) ➞[["shrimp", 15], ["tots", 12]]
// toArray( {} ) ➞[]


// Note * Return an empty array if the object is empty.

const person = {
  firstname: "Binita",
  Secondname: "Subedi",
  level: "Bachelor",
  address: "Kuleshwor"
}
function keysValue( obj ) {
  return Object.entries( obj );

}
console.log( keysValue( person ) );