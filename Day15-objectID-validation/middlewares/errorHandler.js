function errorHandler(err, req, res, next){
    let errorStatus = err.status || 500;
    let message = err.message || "Something went wrong";

    if(err.name === "ValidationError"){
        errorStatus = 400;
        message = Object.values(err.errors).map(data => data.message).join(", ");
    }

    if(err.name ==="CastError"){
        errorStatus = 400;
        message = "Enter a valid ID";
    }

    if(err.code === 11000){
        errorStatus = 400;
        message = "Duplicate entries restricted";
    }

    res.status(errorStatus).json({
        success : false,
        message
    })

    console.log(`[${new Date().toISOString()}] ${err.stack}`)
}

module.exports = errorHandler;