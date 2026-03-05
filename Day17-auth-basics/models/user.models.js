const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required :[true,"Name is required"],
        minlength : 6
    },
    email:{
        type : String,
        unique : true,
        required :[true, "Email is required"],
        match :[/^\S+@\S+\.\S+$/, "Enter a valid email address"]
    },
    password:{
        type :String,
        required :[true, "Enter a valid password"],
        minlength : 8
    }
},{timestamps: true});

module.exports = mongoose.model("User", userSchema);