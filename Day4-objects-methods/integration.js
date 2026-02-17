// SECTION 1: The Expense Manager (The Tool)

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

//Section 2 : The User (The Owner)

let User ={
  name  : "Alex",
  email : "alex@mail.com",
  age   : 25,
  
  accountManager : null, // awiating ExpenseManager module

  updateEmail(newEmail){
    this.email = newEmail;
  },

  getFinalReport(){
    if(!this.accountManager) return "No Manager linked!";
    const total = this.accountManager.calculateTotal();
    const count = this.accountManager.getExpenseCount();
    return `Report for ${this.name}: You have ${count} expenses totalling ₹${total}`

  },
  
}
//Section 3 : Integrating the ExpenseManager module with user
User.accountManager = ExpenseManager;

//Section 4 : Using the system to update the expenses to the array
User.accountManager.addExpense("Coffee", 25, "Food");
User.accountManager.addExpense("Laptop", 1200, "Tech");
User.accountManager.addExpense("Gym Membership", 150, "Health");

//Updating email
User.updateEmail("alex.dev@mail.com");

//Printing report
console.log(User.getFinalReport());

