const mysql = require('mysql2');
const path = require('path');

// مسیر صحیح به فایل .env (یک پوشه بالاتر)
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });


const pool = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    
}).promise();


module.exports =pool