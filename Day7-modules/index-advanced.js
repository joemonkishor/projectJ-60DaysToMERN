import { checkAge , validationError, AuthCheck, AuthError } from "./validation.js";

// Age check
try{
  console.log(checkAge(15))
}catch(error){
  if(error instanceof validationError){
    console.error(`${error.name} : ${error.message}`)
  }
  else{
    console.error(`The other error : ${error}`)
  }
}

try{
  console.log(checkAge(25))
}catch(error){
  if(error instanceof validationError){
    console.error(`${error.name} : ${error.message}`)
  }
  else{
    console.error(`The other error : ${error}`)
  }
}


//Login Auth check

try{
  console.log(AuthCheck("abcd", "1235"))
}catch(error){
  if (error instanceof AuthError){
  console.error(`${error.name} : ${error.message}`)
  }
  else{
    console.error(`The other error : ${error}`)
  }
}