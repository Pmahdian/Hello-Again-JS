const express = require('express');
const router = express.Router();
const userController = require('../controller/users-controller');

//Post /api/users/register
//Post /api/users/login


router.post('/register',userController.register);
router.post('/login',userController.login);