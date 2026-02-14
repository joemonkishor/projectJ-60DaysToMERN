// If/ Else

let expense = 450;

if(expense > 450){
  console.log("Expense is higher")
}
else{
  console.log("Expense is normal")
}

// Switch statement

let category = "shopping"

switch(category){
  case "food":
    console.log("Expense is for food")
    break;
  case "travel":
    console.log("Expense is for travel") 
    break;
  case "shopping":
    console.log("Expense is for shopping")
    break;
  case "travel":
    console.log("Expense is for travel")
    break;
    default :
    console.log("Uncharted expense category")

  }  
 
  // Switch with boolean

  let salary = 2000;

  switch(true){

    case salary > 10000 : 
    console.log("Payscale above average");
    break;

    default:
      console.log("Payscale below average")


  }

  //For loop

  let cartAmount = [150,200,540,65]

  let totalAmount = 0;

  for(i=0; i<cartAmount.length; i++){
    totalAmount = totalAmount + cartAmount[i] // total+= cartAmount[i]
  }

  console.log(totalAmount)

  //While loop

  const shoppingSpree = (startingBalance) => {

  let balance = startingBalance;

      while(balance >=2){
        console.log("I have bought an item");
        balance = balance - 2;
    }
    return "Out of memory";
}
// console.log(shoppingSpree(20))


// For of loop

let griceryList = ["Milk","Eggs","Cofee","Butter"];

for(item of griceryList){
  console.log(`Remember to buy ${item}`);
}

// For loop with functions

let cartItemsTotal = (cartItems) => {
 let total = 0;
  for(let item of cartItems){
       switch(true){
    case item === 200:
    console.log(`₹${item} for Food`)
    break;
    case item === 300:
    console.log(`₹${item} for Milk`)
    break;
    case item === 400:
    console.log(`₹${item} for Pizza`)
    break;
    default :
    console.log(`${item}: unknown item`)
  } 

    total = total + item;
  }

  if(total > 500){
    console.log("Cart value is high");

  
  }
  
  return total;
}

let myCart= [200,300,400];
console.log(`The total cart amount is : ₹ ${cartItemsTotal(myCart)} `);