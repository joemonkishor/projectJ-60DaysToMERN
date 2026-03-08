const User = require("../models/user.models");
const validateRegistration = require("../validation/validateRegistration");
const validateLogin = require("../validation/validateLogin");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const register = async (req, res, next)=>{
    try{
        const {error} = validateRegistration(req.body);
        if(error){
            const err = new Error(error.details.map((data)=> data.message).join(","));
            err.status = 400;
            throw err;
        }

        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new Error("Email is already in use");
            error.status = 400;
            throw error;
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({name, email, password: hashPassword});
         await newUser.save();

        res.status(201).json({success : true, message :"User registration successful"});
    }
    catch(err){
        next(err);
    }
};

const login = async (req, res, next)=>{
    try{
        const {error} = validateLogin(req.body);
        if(error){
            const err = new Error(error.details.map((data)=> data.message).join(", "));
            err.status = 400;
            throw err;
        }

        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            const error = new Error("Invalid Credentials");
            error.status = 401;
            throw error;
        }

        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword){
            const error = new Error("Invalid Credentials");
            error.status = 401;
            throw error;
        }

        const token = jwt.sign({
            id : user._id,
            email :user.email
        },config.JWT_SECRET,{expiresIn : "1h"});


        res.status(200).json({success: true, message :"Login successful",token});
    }
    catch(err){
        next(err);
    }

};


module.exports = {register, login};

