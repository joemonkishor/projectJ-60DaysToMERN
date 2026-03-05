const express = require("express");
const router =express.Router();
const bcrypt = require ("bcryptjs");

const User = require("../models/user.models");

const registerSchema = require("../validation/registerValidation");
const loginSchema = require("../validation/loginValidation");


router.post("/register", async(req,res,next)=>{
    try{

        const {error} = registerSchema.validate(req.body);
        if(error){
            const err = new Error(error.details.map((data)=> data.message).join(", "));
            err.status = 400;
            throw err;
        }

        const existingUser = await User.findOne({email : req.body.email},{email :1});
        if(existingUser){
            const error = new Error("Email ID is already registered");
            error.status = 400;
            throw error;
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name : req.body.name,
            email : req.body.email,
            password : hashPassword
        });

        const savedUser = await newUser.save();

       res.status(201).json({success :true, data :{
           id : savedUser._id,
           name : savedUser.name,
           email : savedUser.email
           }});
    }
    catch(err){
        return next(err);
    }
});

router.post("/login", async(req, res,next)=>{
    try{
        const {error} = loginSchema.validate(req.body);
        if(error){
            const err = new Error(error.details.map((data)=> data.message).join(", "));
            err.status = 400;
            throw err;
        }

        const user = await User.findOne({email : req.body.email});
        if(!user){
            const error = new Error("Invalid email or password");
            error.status = 401;
            throw error;

        }
        const isMatch = await bcrypt.compare(req.body.password,user.password);
        if(!isMatch){
            const error = new Error("Invalid email or password");
            error.status = 401;
            throw error;

        }
        res.json({success: true, message :"Login successful",data:{
            id : user._id,
            name : user.name,
            email: user.email
            }});
    }
    catch(err){
        return next(err);
    }
});

module.exports = router;