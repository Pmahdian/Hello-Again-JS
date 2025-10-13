const pool =require("../utilities/mysql_database")

class CoursesModel {
static getCourses = async() =>{
    const [result] = await pool.query('select * from node.courses');
    return result;
}


static getCourse = async(id) =>{
    const [result] = await pool.query(`select * from node.courses where id = ?`,[id ] );
    return result[0];
}

static insertCourse = async(title)=>{
    const [result] = await pool.query(`insert into courses (Title) values(?)`,[title])
    
    // return {id : result.insertId, titel : titel}
    return getCourse(result.insertId)



}
 
static updateCourse = async(id,title)=>{
    const [result] = await pool.query(`update courses set Title=? where id = ?`,[title,id])
    return getCourse(id)


}

static deleteCourse = async(id)=>{
    const result = await pool.query(`delete from courses where id=?`,[id])
    return id
}



}






module.exports = CoursesModel