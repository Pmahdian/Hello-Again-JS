const mysql = require('mysql2');


const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password :'20042004',
    database :'node'
    
}).promise();


const getCourses = async() =>{
    const [result] = await pool.query('select * from node.courses');
    return result;
}


const getCourse = async(id) =>{
    const [result] = await pool.query(`select * from node.courses where id = ?`,[id ] );
    return result[0];
}

const insertCourse = async(titel)=>{
    const result = await pool.query(`insert into courses(Title) values(?)`,[titel])
    return result


}


const data = insertCourse('python').then((result)=>{
    console.log(result);

})
