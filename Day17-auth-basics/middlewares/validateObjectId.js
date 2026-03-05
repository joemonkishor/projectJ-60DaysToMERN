const mongoose = require("mongoose");

function validateObjectId(req, res, next){
if(mongoose.Types.ObjectId.isValid(req.params.id)){
     return next();
}
const error = new Error("Invalid ID");
error.status = 400;
return next(error)
}

module.exports = validateObjectId;