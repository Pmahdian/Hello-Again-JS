const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token = req.header('Authorization')
    if (!token) return res.status(401).send('Access denied')


}