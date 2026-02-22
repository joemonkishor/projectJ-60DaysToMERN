//setting up express

const express = require("express"); //bring in express
const app = express();              //create an express app
const PORT = 3000;                  // Choose a PORT number

//Home page router
app.get("/",(req, res)=>{
  res.send("Welcome to home page!")
}); 


app.get("/about",(req, res)=>{
  res.send("This is the about page.")

});

app.get("/contact",(req,res)=>{
res.send("The contact details is contact@mail.com")
});

app.get("/login",(req, res)=>{
  res.send("Enter your login credentials!")
});

// Handling http errors
app.use((req, res)=>{
  res.status(404).send("Error 404 : Page not found!")
});  

// Starting the server
app.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
}) 

