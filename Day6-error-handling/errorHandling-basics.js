// Handling errors in basic way

try{
  let num = 20;
  if(num > 18){
  throw new Error("Access denied");
  
  }
  console.log("Acess granted !!")
}
catch(error){
  console.error(error.message)
}

//Note

// new Error >creates an object
//throw      > stops the execution and steps to catch(error)
//error      > holds the object with three elements
              //name    :
              //message :
              //stack   :