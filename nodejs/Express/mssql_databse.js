const sql = require('mssql');
require('dotenv').config();


const config = {
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    server : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    options : {
        encrypt : false,
        TrustServerCertificate : true
    }

}

const poolPromise = new sql.ConnectionPool(config).connect().then(pool =>{
    console.log('conncted to pool')
    return pool
    
}).catch(err=>{
    console.log('Error :' + err)
})