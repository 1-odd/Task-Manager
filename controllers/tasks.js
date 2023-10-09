
const getAllTasks = (req,res) =>{
    res.send('get all tasks')
}


const createTask = (req,res) =>{
    res.json(req.body)
}

const getTask = (req,res) =>{
    res.json({id: req.params.id})
}

const updateTask = (req,res) =>{
    res.send('update  task')
}

const deleteTask = (req,res) =>{
    res.send('delete task')
}

module.exports={
    getAllTasks,  //get all the item from db
    createTask,   //post a new item to db
    getTask,      //get a specific item from db
    updateTask,   //update a specific item in db
    deleteTask    //deletes an item form db
}