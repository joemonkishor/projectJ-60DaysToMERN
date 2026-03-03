const express = require("express");
const mongoose = require("mongoose");

const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const config =require("./config");
const memberRoute = require("./routes/member")

const app = express();

app.use(express.json());
app.use(logger);

app.use("/members",memberRoute);
app.use(errorHandler);

async function  startServer(){
    try{
        await mongoose.connect(config.mongoURI)
        console.log("MongoDB connected successfully");

        app.listen(config.port,()=>{
            console.log(`Server running at http://localhost:${config.port} `);
        })
    }
    catch(err){
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
}

startServer()