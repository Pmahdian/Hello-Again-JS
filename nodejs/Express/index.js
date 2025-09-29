const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
 

app.get('/', (req,res)=>{
    res.send('hello');
})




const courses = [
    {id : 1, name : 'java'},
    {id : 2, name : 'css'},
    {id : 3, name : 'html'},
]

app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('the couse with given id not found')
    res.send(course)
})


app.post('/api/courses', (req,res)=>{
    if(!req.body.name || req.body.name.length < 3)
        return res.status(404).send('name is required')
        

    const course = {
        id : courses.length + 1,
        name : req.body.name

    }
    courses.push(course);
    res.send(course)
})

app.put('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with given id not found');

    if (!req.body.name || req.body.name.length < 3) 
        return res.status(400).send('name is empty or less than 3 char')
    course.name = req.body.name
    res.send(course)

})


const port = process.env.APP_PORT || 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

