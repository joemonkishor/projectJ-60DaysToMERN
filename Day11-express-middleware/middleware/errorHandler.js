//middleware/errorhandler

function errorHandler(err, req,res, next){

  const errorStatus = err.status || 500;
  res.status(errorStatus).json({
    success : false,
    message : err.message || "Internal Server Error"
  })
  console.error(`[${new Date().toISOString()}] ${err.stack}`)
}

module.exports = errorHandler;