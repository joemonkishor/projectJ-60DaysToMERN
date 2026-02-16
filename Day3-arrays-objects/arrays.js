//arrays

//create an array of expenses

let expenses = [50, 200, 30, 120, 75];

//calculate the total using reduce method

let total = expenses.reduce((total,expense)=>{
  return total + expense;
},0);

//filter expenses above 100

let bigExpenses = expenses.filter((expense)=>{ 
  return expense > 100;


})

//console.log("Big expenses are :", bigExpenses);



//add 10% tax to each expense

const texedExpenses = expenses.map((expense)=>{

  return expense * 1.1;
  
})
//console.log(texedExpenses);

//combining two arrays

let array1 = [1,2,3,4];
let array2 = [5,6,7,8];

console.log(array1.concat(array2));  //concat method
console.log([...array1,...array2]);  // spread operator method