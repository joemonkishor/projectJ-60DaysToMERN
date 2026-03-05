function errorHandler(err, req,res,next){
     let statusError = err.status || 500;
     let message = err.message || "Something went wrong";


     if(err.name === "ValidationError"){
          statusError = 400;
          message = Object.values(err.errors).map((data)=> data.message).join(", ");

     }

     if(err.name === "CastError"){
          statusError = 400;
          message = "Invalid ID"
     }

     if(err.code === 11000){
          statusError = 400;
          message = "Duplicate entries are not allowed";
     }

     res.status(statusError).json({success : false , message});

     console.error(`[${new Date().toISOString()}] ${err.stack}`);
}

module.exports = errorHandler;