const courses = [
    {id : 1, name : 'java'},
    {id : 2, name : 'css'},
    {id : 3, name : 'html'},
]
 
 const getCourse =(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('the couse with given id not found')
    res.send(course)
}

const getCourses = (req,res)=>{
    res.send(['htm;','css','javascript']);
}



const insertCourse = (req,res)=>{
    if(!req.body.name || req.body.name.length < 3)
        return res.status(404).send('name is required')
        

    const course = {
        id : courses.length + 1,
        name : req.body.name

    }
    courses.push(course);
    res.send(course)
}



const updateCourse = (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with given id not found');

    if (!req.body.name || req.body.name.length < 3) 
        return res.status(400).send('name is empty or less than 3 char');
    course.name = req.body.name;
    res.send(course);

}

const deleteCourse = (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with given id not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);


    res.send(course);


}


module.exports = {
    getCourse, insertCourse, getCourses, updateCourse, deleteCourse

}