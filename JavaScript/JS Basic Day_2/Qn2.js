// Question 2
// Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.
//   Example

// find( 's' ) -> 5 and 11
// find( 'a' ) -> 0 and 16

var List = [
  { id: 1, firstName: 'Kirtee', lastName: 'Maharjan' },
  { id: 2, firstName: 'Trija', lastName: 'Thebe' },
  { id: 3, firstName: 'Sindhu', lastName: 'Aryal' },
  { id: 4, firstName: 'Kusum', lastName: 'Ranjitkar' },
  { id: 5, firstName: 'Elisha', lastName: 'Bista' }
]

function search( input ) {
  count = List.filter( countFun );
  function countFun( x ) {
    return x.firstName[0] == input.toUpperCase();
  }

  counter = count.length;
  console.log( "number of that starts with " + input + ": " + counter + " that doesnt starts with: " + input + ": " + ( List.length - counter ) )
}

search( "s" )