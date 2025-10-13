// crud api on database





const getCourses = async() =>{
    const [result] = await pool.query('select * from node.courses');
    return result;
}


const getCourse = async(id) =>{
    const [result] = await pool.query(`select * from node.courses where id = ?`,[id ] );
    return result[0];
}

const insertCourse = async(title)=>{
    const [result] = await pool.query(`insert into courses (Title) values(?)`,[title])
    
    // return {id : result.insertId, titel : titel}
    return getCourse(result.insertId)


}
 
const updateCourse = async(id,title)=>{
    const [result] = await pool.query(`update courses set Title=? where id = ?`,[title,id])
    return getCourse(id)


}

const deleteCourse = async(id)=>{
    const result = await pool.query(`delete from courses where id=?`,[id])
    return id
}

 const data = deleteCourse(10).then((result)=>{
    console.log(result);

})

