const express = require('express');
const router = express.Router();

const {getAllTasks,createTask,updateTask,getTask,deleteTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks);
router.route('/').post(createTask);

router.route('/:id').get(getTask);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask);








module.exports=router