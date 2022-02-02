// You have the following list of names:
// Neeta sapkota
// neha shiwakoti
// Srijana Khatiwada
// Smrity Dhakal
// Sami Chakradhar
// Kirtee Maharjan
// Trija Thebe
// Sindhu Aryal
// Kusum Ranjitkar
// Elisha Bista
// Rachana kafle
// Barsha Maharjan
// Pooja Gurung
// Bisikha Subedi
// Kritika Baral
// Srijana Thulung

// Question 1
// Convert the list of names in array of object like:

// [
//   {
//     id: 1,
//     firstName: 'Neeta',
//     lastName: 'Sapkota'
//   },
//   {
//     id: 2,
//     firstName: 'Neha',
//     lastName: 'Shiwakoti'
//   }
//   ...
// ]







var list = [
  "Kirtee Maharjan",
  "Trija Thebe",
  "Sindhu Aryal",
  "Kusum Ranjitkar",
  "Elisha Bista"]






var obj = {};
result = [];
for ( let i = 0; i < list.length; i++ ) {
  var splittedName = list[i].split( " " );
  obj.id = i + 1;
  obj.firstName = splittedName[0];
  obj.lastName = splittedName[1];
  result[i] = obj;
  obj = {};
}
console.log( result );

//






