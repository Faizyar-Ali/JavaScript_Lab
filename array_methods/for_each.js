// forEach() is a built-in JavaScript array method 
// used to loop through and execute a function 
// on each element of an array.

const names = ["faizyar","kashan","faizan","abdullah"]

// To print names in toUpperCase
names.forEach(n=> 
    console.log(n.toUpperCase())
)


// here map is better choice but we do it with for each (for  pushing or upgrading another existed variable)
const h=[]

names.forEach(n=>
        h.push(n.toUpperCase())
    )
console.log(h) 