// Question 3
// Convert the array of the result in Question 1, in following format

// {
//   1: {
//     firstName: 'Neeta',
//       lastName: 'Sapkota'
//   },
//   2: {
//     firstName: 'Neha',
//       lastName: 'Shiwakoti'
//   },
//   ...
// }


var List = [
  { id: 1, firstName: 'Kirtee', lastName: 'Maharjan' },
  { id: 2, firstName: 'Trija', lastName: 'Thebe' },
  { id: 3, firstName: 'Sindhu', lastName: 'Aryal' },
  { id: 4, firstName: 'Kusum', lastName: 'Ranjitkar' },
  { id: 5, firstName: 'Elisha', lastName: 'Bista' }
]



//
var xxx = List.reduce( a, {} );
function a( x, y ) {
  x[y.id] = y;
  delete y.id;
  return x;
}

console.log( xxx )