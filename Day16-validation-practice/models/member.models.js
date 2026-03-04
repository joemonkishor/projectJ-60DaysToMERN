const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    name :{
        type : String,
        trim : true,
        required : [true,"Name is required"]
    },
    email:{
        type : String,
        unique : true,
        required :[true,"E-mail is required"],
        match : [/^\S+@\S+\.\S+$/,"Enter a valid email address"]

    }
},{timestamps: true});

module.exports = mongoose.model("Member", memberSchema);