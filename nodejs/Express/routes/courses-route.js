const express = require('express');
const router = express.Router();
const coursesController = require("../controller/courses-controller");



router.get('/:id', coursesController.getCourse);


router.post('/', (req,res)=>{
    if(!req.body.name || req.body.name.length < 3)
        return res.status(404).send('name is required')
        

    const course = {
        id : courses.length + 1,
        name : req.body.name

    }
    courses.push(course);
    res.send(course)
})

router.put('/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with given id not found');

    if (!req.body.name || req.body.name.length < 3) 
        return res.status(400).send('name is empty or less than 3 char');
    course.name = req.body.name;
    res.send(course);

})


module.exports = router