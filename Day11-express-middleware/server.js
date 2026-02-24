const express = require("express");
const app = express();
const PORT = 3000;

//Built-in middleware
/*************************************/

app.use(express.json())



//custom middleware imports
/*************************************/

const logger = require ("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")


//Applying custom middleware globally
/**************************************/
app.use(logger)



//Modular routes
/***************************************/
const memberRoutes = require("./routes/members")
app.use("/members", memberRoutes)


//Home route
/***************************************/

app.get("/",(req,res)=>{
  res.send("<h1>Server is running</h1>")
})


//Error handling middleware (must be last)
/***************************************/

app.use(errorHandler)



//Starting the server on PORT
/***************************************/

app.listen(PORT,()=>{
  console.log(`Server running successfully at http://localhost:${PORT}`)
})



/*
Notes
************
Built-in middleware:
    express.json()       | used to parse the incoming json requests from POST requests
    req.body             | holds the data from express.json() as a javascript object

Custom middlewares :
    custom middlewares   | can be used to process data coming from req.body

Modular routes     :
    app.use("/members",  | using separate routes folder to import routes for /members route 
    memberRoutes) 
    
Error handler      :
    app.use(errorHandler)| calling the errorHandling funtions written in middleware/errorHandler.js    
*/ 