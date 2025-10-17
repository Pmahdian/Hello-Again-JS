const pool = require('../utilities/mysql_database');

class UserModel {
    static insertuser = async(name, email, password) =>{
        const [result] = pool.query(`insert into users (id, name, email, password)values (uuid(), ?, ?, ?)`, [name, email, password])
        return result;  


} 
}
module.exports = UserModel;