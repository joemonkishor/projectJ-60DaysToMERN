const express = require('express');
const app = express();
const PORT = 3000;


const members =[
  {id : 101, name :"Alice"},
  {id : 102, name :"Bob"}
];

app.get('/',(req,res)=>{
res.send("<h1>Home Page</h1>")
});

//Responds with a JSON object
app.get('/api/user',(req,res)=>{
  res.json({name:"Joemon",role :"MERN Learner"})
});


// Query serach (?term=)
app.get('/search',(req, res)=>{
let id = req.query.id;
if(id){
  res.send(`Your search term is ${id}`)
}
else{
  res.send(`Search term not provided`)
}
});

//  || Note : search?id=101 returns an object in req.query = {id :101}
//            search?id=101&name=joemon results in req.query = {id : 101, name : "joemon"}


//Query with error handling

app.get('/user',(req,res)=>{
  let id = req.query.id;
  if(!id){
    return res.status(400).send("Enter a user ID")
  }
  else{
    res.send(`Your id is ${id}`)
  }
})

//Route parameter (/member/2567)


app.get('/member/:id',(req,res)=>{
const id = req.params.id;
const member = members.find(m => m.id === Number(id)); //search in array members

if(!member){
  res.status(404).send("Member details not found in database");
}else{
  res.json(member);
}

})

/* Note ||  req.params.id returs id in "string", 
            hence Number() implemented for data comparison in array.

*/


//Assigning the port 
app.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})