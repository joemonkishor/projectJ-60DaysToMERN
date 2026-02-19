// Data fetch simulation with async/await error handling

//password checker

function passwordCheck(password){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      if (password === "1234"){
        resolve("Access Granted !!")
      }
      else{
        reject(new Error("Incorrect password, Access Denied !!"))
      }
    }, 1500);
  })
}

async function isPasswordValid(password){
try{
  let result = await passwordCheck(password)
  console.log(result)
}
catch(error){
  console.error(error.message)
}

}

isPasswordValid("1234")