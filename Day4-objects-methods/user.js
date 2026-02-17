// Creating user object and integration with ExpenseManager

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

let User ={
  name  : "Alex",
  email : "alex@mail.com",
  age   : 25,
  
  accountManager : ExpenseManager, //module linking

  updateEmail(newEmail){
    this.email = newEmail;
  },

  getFinalReport(){
    if(!this.accountManager) return "No Manager linked!";
    let total = this.accountManager.calculateTotal();
    return `${this.name} your total spending is ${total}`

  },
  
}
