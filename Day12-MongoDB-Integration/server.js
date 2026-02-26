const express = require ("express");
const membersRoute = require ("./routes/members");
const errorHandler = require ("./middleware/errorHandler");
const logger = require ("./middleware/logger");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

//Calling express
const app = express();

//Built-in middleware
app.use(express.json())

//Custom middleware   | logger.js
app.use(logger)

//Starting DB connection + starting the server
async function startServer(){
try{
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected successfully");

  //Custom route      | members.js
  app.use("/members",membersRoute)


   //Home route
  app.get("/",(req,res)=>{
    res.send("<h1>Server Home Page</h1>")
  })
  

  //Custom middleware | errorHandler.js
  app.use(errorHandler)

 

  //starting the server
  app.listen(PORT,()=>{
    console.log(`Server running successfully at http://localhost:${PORT}`)
  });
}
catch(err){
  console.error("Failed to connect database:", err.message);
  process.exit(1);
}
}
startServer()