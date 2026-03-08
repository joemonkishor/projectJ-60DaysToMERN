function errorHandler(err, req, res, next){
    let statusError = err.status || 500;
    let message = err.message;

    if(err.name ==="ValidationError"){
        statusError = 400;
        message = Object.values(err.errors).map(data=> data.message). join(", ");
    }

    if(err.name ==="CastError"){
        statusError = 400;
        message = "Enter a valid ID"
    }

    if(err.code === 11000){
        statusError = 400;
        message = "Duplicate entries are prohibited"
    }

    if (
        err.name === "JsonWebTokenError" ||
        err.name === "TokenExpiredError" ||
        err.name === "NotBeforeError"
    ) {
        statusError = 401;
        message ="Authentication failed";
    }

    res.status(statusError).json({
        success : false,
        message
    });

    console.log(`[${new Date().toISOString()}] ${err.stack}`)
}

module.exports = errorHandler;