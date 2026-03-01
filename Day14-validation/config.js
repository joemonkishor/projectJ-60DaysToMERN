require("dotenv").config();

module.exports ={
    port : process.env.PORT,
    mongo_URI : process.env.MONGO_URI
};
