//callback structures

//1.
function doubleNumber(number, callback){
let result = number*2;
callback(result)

}

doubleNumber(10,(answer)=>{console.log(answer)});

//2. Password Checker

function isPasswordValid(password, callback){
  
  if(password ===1234){
    callback(true)
  }
  else{
    callback(false)
  }
}

isPasswordValid(1235,(message)=>
{
if(message){
  console.log("Access Granted")
}
else{
  console.log("Access Denied!")
}

}
  
  
)