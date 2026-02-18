//Weather app using fake API 

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

async function displayWeather(){
try{
  const result = await getWeather("kerala")
  console.log("Success,",result)
}
catch(error){
console.log("Something went wrong,",error)
}
}

displayWeather()