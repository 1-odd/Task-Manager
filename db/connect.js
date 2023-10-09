const mongoose = require('mongoose');

const connectString  = 'mongodb+srv://ritik:mit1234@taskmanager.6nwrcxa.mongodb.net/Task-Manager?retryWrites=true&w=majority';



const connectDB = (url)=>{
return mongoose
.connect(connectString,{
  useNewUrlParser: true ,
  useCreateIndex: true,
  useFindAndModify : false,
  useUnifiedTopology:true
})

}

module.exports = connectDB;