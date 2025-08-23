const express = require('express');

const {body, vakidationResult} = require('express-validator');


const app = express();

app.use(express.json());  //برای خواندن اطلاعات بادی

app.get('./',(req,res)=>{
    req.send('hello express');
});


const port  = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}`));