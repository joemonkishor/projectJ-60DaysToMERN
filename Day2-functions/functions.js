//Declaration

function greetName(name){

  return `Hello ${name} !!`
}

console.log(greetName("Joemon"));

//Arrow function declaration

const greetNameByArrow = (name) => `Hello ${name}!!`

console.log(greetNameByArrow("Joemon Kishor"));


//Function expression or ananymous functions

const greetingUser = function (name, time){

  return `Good ${time}, ${name}!!`
}

console.log(greetingUser("Joemon", "Evening"))


//Anonymous functions with setTimeOut()

const timedGreeting = function(name){
    setTimeout(() => {
    console.log(`Hello ${name}!!`)
  }, 3000);

}
timedGreeting("Joemon")



