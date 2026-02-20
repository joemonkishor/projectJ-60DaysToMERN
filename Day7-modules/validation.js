export class validationError extends Error{
  constructor(message){
    super(message);
    this.name = "validationError";
  }
}

export class AuthError extends Error{
  constructor(message){
    super(message);
    this.name = "AuthError";
  }
}

export function checkAge(age){
  if(age < 18){
      throw new validationError("Age must be atleast 18!")
     }
     else{
      return ("Access Granted!!")
    }
}

export function AuthCheck(username,password){
  if(username !== "abcd" || password !== "1234"){
    throw new AuthError("Incorrect credentials")
  }
  else{
    return "Login successful !"
  }
}