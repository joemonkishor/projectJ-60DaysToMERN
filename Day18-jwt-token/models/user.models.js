const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        trim : true,
        minlength : [6,"Name must be at least 6 characters long"],
        required :[true,"Name is required"]
    },
    email:{
        type : String,
        unique : true,
        required : [true,"Email is required"],
        match :[/^\S+@\S+\.\S+$/,"Enter a valid email address"]
    },
    password :{
        type : String,
        minlength :[8,"Password must be at least 8 characters long"],
        required :[true, "Password is required"]
    }
},{timestamps : true});

module.exports = mongoose.model("User",userSchema);