// Find the Smallest and Biggest Numbers Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// minMax( [1, 2, 3, 4, 5] ) ➞[1, 5]

// minMax( [2334454, 5] ) ➞[5, 2334454]

// minMax( [1] ) ➞[1, 1]

// const array = [100, 1, 2, 3, 0, 4, 5]
// var min = array[0]
// var max = array[0]
// for ( var i = 0; i <= array.length; i++ ) {
//   if ( array[i] < min )
//     min = array[i];
//   else if
//     ( array[i] > max ) {
//     max = array[i];
//   }
// }
// console.log( min );
// console.log( max );

//using JS math library

// console.log( Math.min( 23, 45, 65, 32, 12, 56, 78, 45, 37 ) )
// console.log( Math.max( 23, 45, 65, 32, 12, 56, 78, 45, 37 ) )

//array operator with math js

// console.log( Math.min( ...array ) )
// console.log( Math.max( ...array ) )

//using functional approach


const array = [100, 1, 2, 3, 0, 4, 5]

function min_max( array ) {
  var min = Math.min( ...array )
  var max = Math.max( ...array )
  return [min, max];
}
console.log( min_max( array ) );

//next approach by assing arr variable

// function minMax( array, value, index ) {
//   var arr = [];

//   arr.push( Math.min( ...array ) )
//   arr.push( Math.max( ...array ) )

//   return arr;

// }
// console.log( minmax( array ) );












