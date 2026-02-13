//variable of all types

let name = "smith";
let age  = 28;
salary = 48500.50;
isEmployed = true;
let skills = ["JS","HTML","CSS"];

console.log(`Type of variable "name" : ${typeof(name)}`)
console.log(`Type of variable "age" : ${typeof(age)}`)
console.log(`Type of variable "salary" : ${typeof(salary)}`)
console.log(`Type of variable "isEmployed" : ${typeof(isEmployed)}`)
console.log(`Type of variable "skills" :  ${typeof(skills)}`)

//typeof []  "object" because arrays don’t have a unique type category.

// Use Array.isArray() when you need to check specifically for arrays.