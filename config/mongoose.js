//Connection to mongodb
require('dotenv').config();
const mongoose=require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://khanjamshed404:Jamshed404@cluster0.ijbqbyd.mongodb.net/Habit-Tracker?retryWrites=true&w=majority')


const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error to connect with MongoDB"))

db.once('open',()=>{
    console.log('Connected to Database:mongodb')
})

module.exports=db;