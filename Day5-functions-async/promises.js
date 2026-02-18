// Creating Data fetch promise
function fetchDataPromise(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let success = true;
      if (success){
        resolve("Data successfully fetched !!")
      }
      else{
        reject("Data fetch failed!!")
      }

    },1000)
  })
}

fetchDataPromise()
.then((message)=>{console.log(message)})
.catch((error)=>{console.log(error)})

// 2.Password Manager
//-----------------//
function checkPassword(password){
return new Promise((resolve, reject)=>{
  console.log("Checking database for user compatibility....")
  setTimeout(()=>{
    if (password === 1234){
      resolve("Access granted !!")
    }
    else{
      reject("Access Denied!!")
    }

  },2000)
})

}

checkPassword(1234)
.then((message)=>{console.log(message)})
.catch((error)=>{console.log(error)})


//3.Weather app
//-----------///
const cityList = {
  "kerala": { temperature: 30 },
  "delhi": { temperature: 35 }
}; // expected api data

function getWeather(city){
  return new Promise((resolve, reject)=>{
    
    setTimeout(() => {
     let  cityData = cityList[city];
    
      if(cityData){
        let temperature = cityData.temperature;// avoids undefined assignment to cityData if city doesn't exist
        resolve(`The temperature of ${city} is ${temperature}°C ☀️`  )
      }
      else{
        reject("Enter a valid city name")
      }
    }, 3000);
  })
}

getWeather("Kerala")
.then((message)=>{console.log(message)})
.catch((error)=>{console.log(error)})