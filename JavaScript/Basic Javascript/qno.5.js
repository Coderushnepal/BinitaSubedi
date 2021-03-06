// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays.

//   Examples

// keysAndValues( { a: "Apple", b: "Microsoft", c: "Google" } ) ➞[["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues( { a: 1, b: 2, c: 3 } ) ➞[["a", "b", "c"], [1, 2, 3]]
// keysAndValues( { key1: true, key2: false, key3: undefined } ) ➞[["key1", "key2", "key3"], [true, false, undefined]]


// Notes * Remember to sort the keys.
const person = {
  firstname: "Binita",
  Secondname: "Subedi",
  level: "Bachelor",
  address: "Kuleshwor"
}
function keysValue( obj ) {
  return [Object.keys( obj ), Object.values( obj )];

}
console.log( keysValue( person ) );





