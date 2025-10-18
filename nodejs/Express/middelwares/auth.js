const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token = req.header('Authorization')
    if (!token) return res.status(401).send('Access denied')

    jwt.verify(token, "Parnian_firstTryNodeJs_key_100%_secret" )


}