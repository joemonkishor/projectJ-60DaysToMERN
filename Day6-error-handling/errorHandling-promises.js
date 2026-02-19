//Handling error in promises with then/ catch

function fetchData(success){
return new Promise((resolve, reject)=>{
  setTimeout(() => {
    if(success){
      resolve("Data fetched successfully!!")
    }
    else{
      reject(new Error("Data fetch failed"))
    }
    
  }, 1500);
})
}

fetchData(false).then((message)=> console.log(message)).catch((error)=>console.error(error.message))