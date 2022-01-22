// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

var a = ["apple", 1, "ball"];

// a.forEach( element => console.log( typeof ( element ) ) )


function object( b ) {
  var final = []
  for ( var i = 0; i < b.length; i++ ) {
    final.push( typeof b[i] )
  }
  return final
}
console.log( object( a ) )



