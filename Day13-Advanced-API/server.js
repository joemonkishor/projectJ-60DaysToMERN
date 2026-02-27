const express = require ("express");
const mongoose = require ("mongoose");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler")
const membersRoute = require("./routes/members")
const config = require("./config")

const app = express();

//middlewares
app.use(express.json());
app.use(logger);



async function  startServer(){
  try{
    //Database connection
    await mongoose.connect(config.mongoURI)
    console.log("Connected to Mongo Database");

   //Member routes 
    app.use("/members", membersRoute)
   
    //Home route
   app.get("/",(req,res)=>{
    res.send("<h1>Server is running</h1>")
   })
   
   //Error handler
    app.use(errorHandler);

   //starting the server
    app.listen(config.port,()=>{
      console.log(`Server running at  http://localhost:${config.port}`)
    })

  }
  catch(err){
    console.error("Database failed to connect", err.message)
    process.exit(1);
  }
};

startServer();