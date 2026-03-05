const express = require("express");
const mongoose = require("mongoose");

const logger = require ("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const memberRoute = require("./routes/member");
const authRoute = require("./routes/auth");
const config = require("./config");



const app = express();

app.use(express.json());
app.use(logger);



app.use("/members", memberRoute);
app.use("/auth", authRoute);

app.use(errorHandler);

app.get("/", (req,res)=>{
    res.send("<h1>Home Page</h1>")
});

async function startServer (){
    try{

        await mongoose.connect(config.databaseURL);
        console.log("Connected to database...");

        app.listen(config.port,()=>{
            console.log(`Server started at http://localhost:${config.port} `);
        })
    }
    catch(err){
        console.error("Database connection error",err.message);
        process.exit(1);
    }
}

startServer();