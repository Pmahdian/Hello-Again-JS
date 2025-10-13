const express = require('express');
const router = express.Router();
const homeController = require('../controller/home-controller')

router.get('/',homeController.sendHello);

module.exports = router 