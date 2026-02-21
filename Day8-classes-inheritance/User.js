//Creating user class extending person

import { Person } from "./Person.js";
import { ValidationError, AuthError } from "./Errors.js";

export class User extends Person{
  constructor(name, age, email,role, password){
    super(name,age)
    this.email = email;
    this.role = role;
    this.password = password ;
  }


login(inputPassword){
  if(inputPassword !== this.password){
    throw new AuthError(`Invalid Password !`)
  }
  return `${this.name} logged in successfully !`;
}

updateEmail(newEmail){
  if(!newEmail.includes('@')){
    throw new ValidationError('Enter a valid email ID')
  }
  this.email = newEmail;
  return `Email has been updated to ${this.email}`;
}
}