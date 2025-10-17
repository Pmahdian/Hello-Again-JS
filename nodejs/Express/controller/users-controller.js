userModel = require('../models/users-model');
const Joi = require('joi');


const register = async (req, res, next)=> {
    console.log(req.body);
    res.send('ok');

};
const login = async (req, res, next)=> {


};

module.exports = {
    register,login
};