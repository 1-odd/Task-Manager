const Task = require('../models/tasks')

// get all task
const getAllTasks = async (req,res) =>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})

    } catch (error) {
        res.status(500).json({msg : error})
    }
}

// create new task
const createTask = async (req,res) =>{
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task})

    }catch(error){
        res.status(500).json({msg : error})
    }
}

// find a single task by id
const getTask = async (req,res) =>{
    try {
        const {id : taskID} = req.params
        const task =  await Task.findById({_id:taskID});
        if (!task){
            return res.status(404).json({msg:`no task found with id: ${taskID}` })
        }

        res.status(200).json({task})

    } catch (error) {
        res.status(500).json({msg : error})
    }
}


// update task
const updateTask = async (req,res) =>{
  try {
    const {id : taskID} = req.params;

    const task  = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true, //return the updated user not the old one
        runValidators:true,
    });
    if(!task){
        return res.status(404).json({msg:`No task found with id: ${taskID}`});
    }

    res.status(200).json({task})

  } catch (error) {
    res.status(500).json({msg : error})
  }
}


// delete task
const deleteTask = async (req,res) =>{
   try {
    const {id : taskID} = req.params;
    const task =  await Task.findOneAndDelete({_id:taskID});
    if(!task){
        return res.status(404).json({msg:`No task found with id: ${taskID}`});
    }
   // res.status(200).json({task});
    res.status(200).send()

   } catch (error) {
    res.status(500).json({msg : error});
   }
}

module.exports={
    getAllTasks,  //get all the item from db
    createTask,   //post a new item to db
    getTask,      //get a specific item from db
    updateTask,   //update a specific item in db
    deleteTask    //deletes an item form db
}