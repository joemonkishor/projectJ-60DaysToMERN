const joi = require("joi");

const registerSchema =joi.object({
    name: joi.string().trim().min(6).required().messages({
        "string.empty" :"Name is required",
        "string.min" :"Name must be at least 6 characters long"
    }),
    email:joi.string().required().email().messages({
        "string.empty" :"Email is required",
        "string.email" : "Enter a valid email address"
    }),
    password :joi.string().min(8).required().messages({
        "string.empty" : "Password is required",
        "string.min" :"Password must be at least 8 characters long"
    })

});

module.exports =registerSchema;