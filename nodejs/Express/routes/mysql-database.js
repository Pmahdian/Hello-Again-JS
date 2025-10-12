const mysql = require('mysql2');


const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password :'20042004',
    database :'node'
    
}).promise();


const getCourses = async() =>{
    const result = await pool.query('select * from node.courses');
    console.log(result[0]);
}


getCourses();