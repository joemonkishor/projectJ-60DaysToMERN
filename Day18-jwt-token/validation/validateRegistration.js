const joi = require('joi');

const validateRegistration = (data)=>{
    const schema = joi.object({
        name: joi.string().trim().min(6).required().messages({
            "string.empty" : "Name is required",
            "string.min" : "Name must be at least 6 characters"
        }),
        email: joi.string().required().email().messages({
            "string.empty" : "Email is required",
            "string.email" : "Enter a valid email address"
        }),
        password: joi.string().required().min(8).messages({
            "string.empty" :"Password is required",
            "string.min" : "Password must be at least 8 characters"
        })
    })
    return schema.validate(data);
}

module.exports = validateRegistration;