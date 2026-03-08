const express = require('express');
const config = require("./config/config");
const authRoute = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger");
const testRoute = require("./routes/testRoute");
const startDataBase = require("./config/db");

const app = express();

app.use(express.json());
app.use(logger);


        //V1 APIs//
//************************* */
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/test', testRoute);

app.use(errorHandler);


startDataBase().then(()=>{
    app.listen(config.port,()=>{
        console.log(`Server running successfully on http://localhost:${config.port}`);
    });
});
