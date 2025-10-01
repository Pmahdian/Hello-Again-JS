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



const addCourse = (req,res)=>{
    if(!req.body.name || req.body.name.length < 3)
        return res.status(404).send('name is required')
        

    const course = {
        id : courses.length + 1,
        name : req.body.name

    }
    courses.push(course);
    res.send(course)
}

module.exports = {
    getCourse, addCourse, getCourses

}