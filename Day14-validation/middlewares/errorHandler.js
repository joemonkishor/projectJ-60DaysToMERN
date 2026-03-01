function errorHandler(err, req, res,next){
    let errorStatus = err.status || 500;
    let message = err.message;

    if(err.name === "ValidationError"){
        errorStatus = 400;
        message = Object.values(err.errors).map(v=>v.message).join(",");
    }

    if(err.name === "CastError"){
        errorStatus = 400;
        message = "Invalid ID";
    }

    if(err.code === 11000){
        errorStatus = 400;
        message = "Duplicate values entered";
    }

    res.status(errorStatus).json({
        success : false,
        message
    });
    console.log(`[${new Date().toISOString()}] ${err.stack}`);
}

module.exports = errorHandler;