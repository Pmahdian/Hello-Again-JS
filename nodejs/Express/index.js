const Logger = require('./middelwares/logger');
const express = require('express');
const helmet = require('helmet');
const morgan = require("morgan");
const coursesRoute = require('./routes/courses-route');
const userRoute = require('./routes/users-route');
const homeRoute = require('./routes/home-route');

const app = express();

require('dotenv').config();


const startupDebug =  require('debug')('startup')

app.use(express.json());
app.use(Logger);
app.use(helmet());

startupDebug('hello from startupdebug')

if (app.get('env') === "development") app.use(morgan("tiny"));






app.use('/api/courses', coursesRoute);
app.use('/', homeRoute);


const port = process.env.APP_PORT || 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

