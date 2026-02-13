// Testing operators along with literals and type conversion
// Net income calculator

let income = 50000;
let taxRate = 0.3;
let netIncome = income * (1-taxRate);

console.log(`Net income after ${taxRate}% tax : ₹${netIncome.toFixed(0)}`)