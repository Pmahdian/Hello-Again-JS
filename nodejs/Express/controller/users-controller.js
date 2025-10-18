
const Joi = require('joi');
const UserModel = require('../models/users-model');



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
     
    

    
    const result = await UserModel.insertUser(req.body.name,req.body.email,req.body.password)   
    console.log(result) 
        res.send('ok')

};
const login = async (req, res, next)=> {


};

module.exports = {
    register,login
};