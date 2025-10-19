const jwt = require('jsonwebtoken');
const path = require('path');

// مسیر صحیح به فایل .env (یک پوشه بالاتر)
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

module.exports = function auth(req, res, next){
    const token = req.header('Authorization')
    if (!token) return res.status(401).send('Access denied')


    try{  
    const decode = jwt.verify(token, process.env.SECRET_KEY)
    req.userData = decode //define a new property for a valid token
    next()
    }
    catch(er){
        res.satatus(400).send('token is invalid')
    }


}

// You should never store tokens in the database because it allows hackers to easily access them. This is dangerous and bad for your application's security.