const jwt = require('jsonwebtoken');
const config = require('../config/config');

// function authHandler(req, res,next){
//     const authHeader = req.header["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//
//     if(!token){
//     }
// }
//


 function  authHandler (req, res, next){
    try{
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if(!token){
            const error = new Error("Access Denied. No token provided");
            error.status = 401;
            throw error;
        }

        const authData =  jwt.verify(token, config.JWT_SECRET);
        req.user = authData;
        next();
    }
    catch(err){
        next(err);
    }
}

module.exports = authHandler;
