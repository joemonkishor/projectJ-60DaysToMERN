//Creating a person class

export class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }
  greet(){
    return `Hi I'm ${this.name} age : ${this.age}`
  }
}