
const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const UserModel = require('../models/users-model');
require('dotenv');



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

        const user = await UserModel.getUserByEmail(req.body.email)
        if (user) return res.status(400 ).send("user already registered")

        const hashPassword = await bcrypt.hash(req.body.password, 10)    

        const result = await UserModel.insertUser(
            req.body.name,
            req.body.email
            ,hashPassword)   
        console.log(result) 


        const newUser = await UserModel.getUserByEmail(req.body.email)

        const token = jwt.sign({id : newUser.id}, "Parnian_firstTryNodeJs_key_100%_secret")

        res.header("Authorization", token).send(_.pick(newUser,["id", "name", "email"])); //by using lodash

};
const login = async (req, res, next)=> {
    const schema= {
        email : Joi.string().email().required(),
        password : Joi.string().min(5).max(50).required() 
    }
    const validateResult =  Joi.object(schema).validate(req.body );
    console.log(validateResult);
    if (validateResult.error)
        return res.send(validateResult.error.details[0].message)
    
    const user = await UserModel.getUserByEmail(req.body.email)
    if (! user) return res.status(400).send('emial or password is invalid')

    const validPassword = await bcrypt.compare(req.body.password,  user.password)
    if (!validPassword) return res.status(400).send('email or password is invalid')
    const token = jwt.sign({id : user.id}, "Parnian_firstTryNodeJs_key_100%_secret")    
    res.send(token);     



};

module.exports = {
    register,login
};





