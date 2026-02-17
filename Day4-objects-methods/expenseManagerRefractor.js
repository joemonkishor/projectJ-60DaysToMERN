// Creating Expense Manager

let ExpenseManager = {

  expenses : [],

  addExpense(item, amount, category){
    this.expenses.push({item,amount,category});
  },

  calculateTotal(){
    return this.expenses.reduce((total,item) => total + item.amount, 0);
  },

  getExpenseCount(){
    return this.expenses.length;
  },

}


ExpenseManager.addExpense("Laptop", 1200, "Tech");
ExpenseManager.addExpense("Coffee", 20, "Food");

let total = ExpenseManager.calculateTotal();
let count = ExpenseManager.getExpenseCount();

console.log(`You have ${count} expenses totalling ${total}`);
