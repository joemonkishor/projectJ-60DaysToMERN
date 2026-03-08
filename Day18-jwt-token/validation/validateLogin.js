const joi = require ('joi');

const validateLogin = (data)=>{

    const schema= joi.object({
        email: joi.string().required().email().messages({
            "string.empty" :"Email is required",
            "string.email" :"Enter a valid email address"
        }),
        password : joi.string().min(8).required().messages({
            "string.empty" :"Password is required",
            "string.min" : "Password must be at least 8 characters"
        })

    });

    return schema.validate(data);

};

module.exports = validateLogin;