const CoursesModel = require('../models/courses_model');


 
 const getCourse =(req,res)=>{
    CoursesModel.getCourse(parseInt(req.params.id)).then((result)=>{
        if (!result) res.status(404).send('the couse with given id not found')
        res.send(result)

    })
    // const course = courses.find(c=> c.id === parseInt(req.params.id))
}

const getCourses = (req,res)=>{
    CoursesModel.getCourses().then((result)=>{
        res.send(result)
    })
}



const insertCourse = (req,res)=>{
    if(!req.body.name || req.body.name.length < 3){
        res.status(404).send('name is required')
        return;
    }
    CoursesModel.insertCourse(req.body.name).then((result)=>{
        res.send(result)

    })
        
}
    
    




const updateCourse = (req,res)=>{
    // const course = courses.find(c=> c.id === parseInt(req.params.id));
    CoursesModel.getCourse(parseInt(req.params.id).then((result)=>{
        if(!result) return res.status(404).send('the course with given id not found');

    }))

    if (!req.body.name || req.body.name.length < 3) 
        return res.status(400).send('name is empty or less than 3 char');

    CoursesModel.updateCourse(parseInt(req.params.id), req.body.name).then((result)=>{
        res.send(result)
    })


    // course.name = req.body.name;
    // res.send(course);

}

const deleteCourse = (req,res)=>{
    // const course = courses.find(c=> c.id === parseInt(req.params.id));
    CoursesModel.getCourse(parseInt(req.params.id)).then((result)=>{
        if(!result) return res.status(404).send('the course with given id not found');


    })

    // const index = courses.indexOf(course);
    // courses.splice(index, 1);
    CoursesModel.deleteCourse(parseInt(req.params.id).then((result)=>{
        res.send(result);

    }))




}


module.exports = {
    getCourse, insertCourse, getCourses, updateCourse, deleteCourse

}