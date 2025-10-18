const jwt = require('jsonwebtoken');
const path = require('path');

// مسیر صحیح به فایل .env (یک پوشه بالاتر)
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

function auth(req, res, next){
    const token = req.header('Authorization')
    if (!token) return res.status(401).send('Access denied')

    jwt.verify(token, process.env.SECRET_KEY)


}