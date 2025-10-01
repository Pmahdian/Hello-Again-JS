const Logger = require('./logger');
const express = require('express');
const helmet = require('helemt');
const morgan = require("morgan");

const app = express();

require('dotenv').config();


const startupDebug =  require('debug')('startup')

app.use(express.json());
app.use(Logger);
app.use(helmet());

startupDebug('hello from startupdebug')

if (app.get('env') === "development") app.use(morgan("tiny"));


app.get('/', (req,res)=>{
    res.send('hello');
})




const courses = [
    {id : 1, name : 'java'},
    {id : 2, name : 'css'},
    {id : 3, name : 'html'},
]




const port = process.env.APP_PORT || 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

