const user={
  "name":"faizyar",
}

const user_details = {
    "age":19,
    "jobtype":"part_time",
    "identity":"German",
}
console.log(user)
console.log(user_details)

// merged_user
const person = {...user,...user_details}
console.log(person)
