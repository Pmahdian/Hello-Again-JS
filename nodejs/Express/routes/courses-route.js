const express = require('express');
const router = express.Router();
const coursesController = require("../controller/courses-controller");



router.get('/:id', coursesController.getCourse);

router.get('/', coursesController.getCourses);


router.post('/', coursesController.insertCourse);

router.put('/:id', coursesController.updateCourse);


module.exports = router