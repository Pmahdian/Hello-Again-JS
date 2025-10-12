const mysql = require('mysql2');


const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password :'20042004',
    database :'node'
    
}).promise();


