import { checkAge } from "./validation.js";  

try{
  console.log(checkAge(15));
}catch(error){
console.error(`${error.name} : ${error.message}`)
}


try{
  console.log(checkAge(25));
}catch(error){
console.error(`${error.name} : ${error.message}`)
}