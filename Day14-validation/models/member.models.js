const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    name :{
        type : String,
        trim : true,
        required : [true, "Name is required"]
    },
    email:{
        type : String,
         unique : true,
        required :[true, "Email is required"],
        match :[/^\S+@\S+\.\S+$/,"Please enter a valid email ID"]
    }

},{timestamps :true});

module.exports = mongoose.model("Member", memberSchema);