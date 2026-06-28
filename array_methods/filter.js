// array.filter() method is used to create 
// a new array containing only the elements 
// from the original array that pass a specific test condition.



// for example to keep only user who's age are greater than or equal to 18 
const users = [
    { age: 16 },
    { age: 20 },
    { age: 25 }
];

const filtereduser=users.filter(user => user.age>=18)
console.log(filtereduser)