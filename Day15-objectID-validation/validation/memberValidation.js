const joi = require("joi");

const memberSchema = joi.object({
    name : joi.string().trim().min(6).required().messages({
        "string.empty" : "Enter a name",
        "string.min" :"Name must at least 6 characters"
    }),
    email: joi.string().required().email().messages({
        "string.empty" : "E-mail ID is required",
        "string.email" : "Enter a valid email address",
    })
});

module.exports = memberSchema;


