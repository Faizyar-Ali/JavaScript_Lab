const user = {
    name: "Eliot",
    age: 20
};

//without destruction
console.log(user.name)

// after destructuring
const { name, age } = user;
console.log(name)
