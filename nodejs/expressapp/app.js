const express = require('express');

const app = express();

app.get('./',(req,res)=>{
    req.send('hello express');
});

app.get('./api/users', (req,res)=>{
    res.send
} )
const port  = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}`));