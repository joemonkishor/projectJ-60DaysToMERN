//Creating a custom error with a child class

class validationError extends Error{
  constructor(message){
    super(message);
    this.name = "validationError";
  }
}

function checkAge(age){
  if(age < 18){
    throw new validationError("Age must be atleast 18")
  }
  else{
    return ("Access granted")
  }


}

try{
  console.log(checkAge(14));
}catch(error){
  console.error(`${error.name} : ${error.message}`);
}