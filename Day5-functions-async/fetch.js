//Testing API fetch

//1. Fetching data with promise then/catch
/******************************************/

fetch("https://pokeapi.co/api/v2/pokemon/ditto") //fatches data | returns promise
.then(response => response.json()) 
.then(data=> console.log(data.name))
.catch(error => console.error(error));


//2. Fetch data error handling with then/catch
/*********************************************/

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(response =>{
  if(!response.ok){
    throw new Error("Error fetching data from API")
  }else{
    return response.json()
  }
})
.then(data=> console.log(data.name))
.catch(error=>console.log(error))




//3. Fetching data with async/await

async function fetchData(pokemon){
try{
  let baseURL = "https://pokeapi.co/api/v2/pokemon/";
  let URL = (baseURL+pokemon).toLowerCase()
   const response = await fetch(URL);
if(!response.ok){
  throw new Error("Pokemon not found,data fetch failed!")
}else{
  const data = await response.json(); // returns promse
  console.log(`Pokemon ${data.name}'s ID is ${data.id}`);
}
}
catch(error){
  console.error(error);
}
}

fetchData("pikachu")

/*
Notes:
************
1.Fetching data with promise then/catch

  |.json() parsing the data in json format
  |.then(response => response.json)  | returns a promise
  |.then(data=> console.log(data))   | process the promise response

2.Fetch data error handling with then/catch

  | if(!response.ok) checks reponse.ok = true;

3.Fetching data with async/await

  | const data = await response.json() | response.json returns promise, hence await.
  | if await is excluded, data will be undefined.

*/