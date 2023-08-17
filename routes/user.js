// Using express
const express=require('express');
const router=express.Router();
const passport=require('passport')

// getting the user Controller
const userController=require('../controllers/user_controller');

// showing the login page
router.get('/login',userController.login);

// Showing the signup page
router.get('/signup',userController.signup)

// Creating the user from sign up page
router.post('/create',userController.create);

// Creating the userseassion for home page
router.post('/createSession',passport.authenticate('local',{failureRedirect:'/user/login'},),userController.createSession);

// Sign out 
router.get('/signOut',userController.signout);


module.exports=router