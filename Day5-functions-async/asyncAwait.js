//Data fetch handling


function fetchDataPromise(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let success = true;
      if(success){
        resolve("Data fetched successfully!!")
      }
      else{
        reject("Error : Data fetch failed!!");
        
      }
      
    }, 1000);

  })
}

async function isDataFetched(){
  try{
    const result = await fetchDataPromise()
    console.log(result)
  }
  catch(error){
    console.log(error)
  }
}

isDataFetched()