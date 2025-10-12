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


const data = getCourses().then((result)=>{
    console.log(result);

});