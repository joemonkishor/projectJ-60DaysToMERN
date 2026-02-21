import { User } from "./User.js";
import { ValidationError, AuthError } from "./Errors.js";

const user = new User("Joemon",33,"joemon@mail.com","admin","1234");
 console.log(user.greet());

try{
  console.log(user.login("12345"))
}catch(error){
  if(error instanceof AuthError){
  console.error(`Auth error : ${error.message}`)
  }
}

try {
  console.log(user.updateEmail("joemonkishor@gmail.com"))
}catch(error){
  if(error instanceof ValidationError){
    console.error(`Validation error : ${error.message}`)
  }
}