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


module.exports = {
    getCourse

}