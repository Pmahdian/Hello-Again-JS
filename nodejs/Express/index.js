const Logger = require('./middelwares/logger');
const express = require('express');
const helmet = require('helemt');
const morgan = require("morgan");
const coursesRouter = require('./routes/courses-route');
const homeRoute = require('./routes/home-route')

const app = express();

require('dotenv').config();


const startupDebug =  require('debug')('startup')

app.use(express.json());
app.use(Logger);
app.use(helmet());

startupDebug('hello from startupdebug')

if (app.get('env') === "development") app.use(morgan("tiny"));






app.use('/api/courses', coursesRouter);
app.use('/', homeRoute);


const port = process.env.APP_PORT || 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

