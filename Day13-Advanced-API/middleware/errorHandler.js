function errorHandler (err, req, res, next){
  let errorStatus = err.status || 500;
  let message = err.message || "Internal server error";


  //Handling mongoose validation error (schema error checks)
  /*******************************************/
  if(err.name === "ValidationError"){
    errorStatus = 400;
    message = Object.values(err.errors).map(v=>v.message).join(",");
  }


  //Handling object ID errors
  /*******************************************/
  if(err.name === "CastError"){
    errorStatus = 400;
    message = " Invalid ID";
  }


  //Handling duplicate entries
  /*******************************************/
  if(err.code === 11000){
    errorStatus = 400;
    message = "Duplicate field value entered"
  }


  //Stanardised JSON response
  /*******************************************/
  res.status(errorStatus).json({
    success : false,
    message
  });


//Errors for dev debugging
/*******************************************/  
  console.log(`[${new Date().toISOString()}] ${err.stack}`)
}


module.exports = errorHandler;