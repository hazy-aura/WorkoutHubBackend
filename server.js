const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout')
require('dotenv').config();

//express app   
const app = express();


const PORT = process.env.PORT;

//middleware
app.use(express.json());

app.use( (req,res,next)=>{
console.log(req.path, req.method);
next();
});



//route
app.use('/api/workouts',workoutRoutes);


//connect db
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("connnected to mongoDB online")
})
.catch((err)=>{
    console.log(err)
});

//listen for request
app.listen(PORT, ()=>{
    console.log("Server started at port:" + PORT);
})