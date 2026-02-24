//Logger middleware
/********************************/

function logger(req, res,next){

  console.log(`${req.method} ${req.url}`)
  next()
}

module.exports = logger;


/*
Notes :
****************
    req.method        | Get's the http request type (GET,POST,PUT,DELETE)
    next()            | notifies express to move to rest of exucution in server.js

    In production     | The logs are stored with libraries like:
                          1. Morgon
                          2. Winston
                          3. Bunyan/pino
*/