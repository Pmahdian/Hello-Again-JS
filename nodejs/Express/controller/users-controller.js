userModel = require('../models/users-model');
const Joi = require('joi');



const register = async (req, res, next)=> {
    const schema= {
        name : Joi.string().min(3).max(50).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(5).max(50).required() 
    }
    const validateResult =  Joi.object(schema).validate(req.body );
    console.log(validateResult);
    if (validateResult.error)
        return res.send(validateResult.error.details[0].message)

        res.send('ok')

};
const login = async (req, res, next)=> {


};

module.exports = {
    register,login
};