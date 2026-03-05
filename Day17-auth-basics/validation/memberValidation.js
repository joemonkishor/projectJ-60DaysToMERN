const joi = require("joi");

const memberSchema = joi.object({
    name :joi.string().trim().min(6).required().messages({
        "string.empty": "Name is required",
        "string.min" :"Name should be at least 6 characters long"
    }),
    email: joi.string().required().email().messages({
        "string.empty" : "E-mail is required",
        "string.email" : "Enter a valid email address"
    })
});


module.exports = memberSchema;