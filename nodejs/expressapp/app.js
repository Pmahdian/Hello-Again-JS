const express = require('express');

const app = express();

app.get('./',(req,res)=>{
    req.send('hello express');
});

app.listen(3000, ()=> console.log('listening on port 3000 n'));