const express = require('express');
const router = express.Router();
const coursesController = require("../controller/courses-controller");
const auth = require('../middelwares/auth');

// router.use(auth);  //if you want to use middelware for all routes you can write this line. 

router.get('/:id', coursesController.getCourse);

router.get('/', coursesController.getCourses);


router.post('/', coursesController.insertCourse);

router.put('/:id', coursesController.updateCourse); 

router.delete('/:id', coursesController.deleteCourse);


module.exports = router