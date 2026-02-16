// create array of objects

const expenses = [
  {item : "Coffee",amount  :  50, category :"Food"},
  {item : "Book" , amount  : 200, category :"Education"},
  {item : "Bus ticket", amount : 50, category:"Transport"},
]

// function to add a new expense
let addExpense = (itemValue, amountvalue, categoryValue) =>{
  return expenses.push({item : itemValue, amount : amountvalue, category : categoryValue})
}

addExpense("Yoga", 100, "Exercise");


// function to filter expenses by category
//---------------------------------------//

let filterByCategory = (category) =>{
  return expenses.filter((expense)=>{ return expense.category === category})
}

//Note : Methods
  //#1
    //let filterByCategory = expenses.filter((expense)=>{ return expense.category === "Food"});

    //#2
    // function filterByCategory(category) {
    //   return expenses.filter((expense)=> {return expense.category===category})
    // }

//

//function to calculate total expense
//----------------------------------//
                      
let calculateTotal = (priceList)=>{
  return priceList.reduce((total,expense)=> total+expense.amount,0);
}
// Syntax Note : array.reduce ((a,b)=>{a+b},0);



// Print summary function :
//------------------------//

let printSummary = (expenseList) =>{
  console.log("Print Summary :")
  expenseList.forEach(expense => {
    console.log(`${expense.item} : ${expense.amount} ${expense.category}`)
    
  });
  console.log("Total expense :", calculateTotal(expenseList))
  }




// :Output
printSummary(expenses);
console.log(filterByCategory("Food"));