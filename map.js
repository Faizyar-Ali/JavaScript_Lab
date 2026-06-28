// array.map  method is used to create a brand new array 
// by transforming every element in an existing array
//  without modifying the original data.


// to double an array of integer
const numbers=[10,20,30]

const double = numbers.map(n=>n*2);
console.log(double)


// to uppercase the array of string
const name = ["faizyar","hamza","abdullah","kashan"]

const namesupper=name.map(n => n.toUpperCase())
console.log(namesupper)