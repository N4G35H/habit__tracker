// using Express
const express=require('express');
const router=express.Router();

// // Getting the home Controller
const homeController=require('../controllers/home_controller');

// showing the home page
router.get('/',homeController.home)

// Creating the habit route
router.post('/create-habit',homeController.createhabit);

// Deleting the habit route
router.get('/delete-habit/',homeController.deletehabit);

// using details route
router.use('/details',require('./details'))


module.exports=router;