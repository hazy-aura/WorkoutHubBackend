const express = require('express');
const router = express.Router();
const {createWorkout,getAllWorkouts,
    getWorkout,deleteWorkout,updateWorkout}= require('../controllers/workoutControllers');




//get all workouts
router.get('/',getAllWorkouts);

//get single workout

router.get('/:id',getWorkout);

//post a new workout

router.post('/', createWorkout);

//delete
router.delete('/:id',deleteWorkout);

//update

router.patch('/:id',updateWorkout);


module.exports =router;