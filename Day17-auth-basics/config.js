require("dotenv").config();

const config = {
    port: process.env.PORT || 5000,
    databaseURL : process.env.MONGO_URI,
}

module.exports = config;