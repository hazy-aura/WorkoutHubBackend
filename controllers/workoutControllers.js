const Workout = require('../models/workoutModels');
const mongoose = require('mongoose');

//get all workout
async function getAllWorkouts(req,res) {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts)
    
}

//get a workout
async function getWorkout(req,res){
    const {id }= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Not a valid id"});
    }
    
   
    const workout = await Workout.findById(id);
    if(!workout){
       return res.status(404).json({error: 'Workout doesnot exist'})
    }
    res.status(200).json(workout);
}

//create a new workout
async function createWorkout(req,res) {
    const {title,reps,load} = req.body;
    try{
       const workout = await Workout.create({
        title,load,reps
       });
       res.status(200).json(workout);

    }catch(error){
      res.status(400).json({error: error.message})

    }
    
}

//delete a workout

async function deleteWorkout(req,res) {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Not a valid id"});
    }
    const workout = await Workout.findOneAndDelete({_id: id});
    if(!workout){
        return res.status(404).json({error: 'Workout doesnot exist'})
     }
     res.status(200).json(workout);
    
}

//update a workout  
async function updateWorkout(req,res) {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Not a valid id"});
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    });

    if(!workout){
        return res.status(404).json({error: 'Workout doesnot exist'})
    }
    res.status(200).json({workout})
    
}



module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}