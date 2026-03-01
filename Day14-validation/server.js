const express =require("express");
const mongoose = require("mongoose");

const memberRoute = require("./routes/member");
const logger =require("./middlewares/logger");
const errorHandler = require ("./middlewares/errorHandler");
const config = require("./config");

//Express APP
const app = express();

//Middlewares
app.use(express.json());
app.use(logger);


//Routes
app.use("/members", memberRoute);




//Error Handler
app.use(errorHandler);

//Mongoose DB connection & server start
async function startServer(){
    try{

        //DB connection
        await mongoose.connect(config.mongo_URI);
        console.log("Connected to Mongo Database");

        app.get("/", (req, res)=>{
            res.send("<h1> Server is running</h1>")
        })
        //Server start
        app.listen(config.port,()=>{
            console.log(`Server running successfully on http://localhost:${config.port}`);
        })

    }
    catch(err){
        console.error("Database failed to connect",err.message);
        process.exit(1);
    }

}



startServer();