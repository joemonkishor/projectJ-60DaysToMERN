const joi = require("joi");

const loginSchema = joi.object({
    email: joi.string().required().email().messages({
        "string.empty" : "Email is required",
        "string.email" : "Enter a valid email address"
    }),
    password :joi.string().required().min(8).messages({
        "string.empty" :"Password is required",
        "string.min" :"Password must be at least 8 characters"
    })
});

module.exports = loginSchema;