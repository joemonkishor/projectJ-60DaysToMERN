require("dotenv").config();

const config ={
    port: process.env.PORT || 5000,
    mongoDB : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET
}

module.exports = config;