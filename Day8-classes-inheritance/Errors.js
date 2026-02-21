// Creationg custom errors

export class ValidationError extends Error{
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