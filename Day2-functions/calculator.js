//Simple calculator using switch

const calculator = function (num1, num2, operator){
      let numberType = typeof Infinity;

  if( typeof num1 !== numberType || typeof num2 !== numberType){
    return "Enter two valid numbers"
  }

  switch(operator){
    case "+" :
      return num1 + num2;
    case "-" :
      return num1 - num2 ;
    case "*" :
      return num1 * num2;
    case "/" :
      return num2 !==0 ? num1/num2 : "Division with 0 is not possible";
    default:
      return "Invalid Operator"
  
  }
}


console.log(calculator(5,"b","*"))