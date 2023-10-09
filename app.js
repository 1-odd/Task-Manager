const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


// middlewares
app.use(express.json(true));


app.get('/hello', (req,res)=>{
    res.send('Task Manager app')
});

// routes
app.use('/api/v1/tasks', tasks);






const port = 3000;

const start = async () =>{    // server start if and only if our database is connected
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`server is running at ${port}...`));
    } catch (error) {
        console.log(error)
    }
}


start();

