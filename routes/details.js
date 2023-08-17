// Using Express 
const express=require('express');
const router=express.Router();

// Getting the details Controller
const detailsController=require('../controllers/details_controller');

// showing Details page
router.get('/details',detailsController.details)

// Update route for habits
router.post('/update-habit/',detailsController.updateHabit)

module.exports=router
