const mongoose = require('mongoose');
const config = require('./config');

async function startDataBase(){
    try{

        await mongoose.connect(config.mongoDB);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log("Could not connect to MongoDB", err.message);
        process.exit(1);
    }
}

module.exports = startDataBase;