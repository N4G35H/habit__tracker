// Using Express
const express=require('express');
const router=express.Router();

// All the routes
const homerouter=require('./home');
const userrouter=require('./user');
const detailsrouter=require('./details')



// Using All the routes
router.use('/',homerouter);
router.use('/user',userrouter);
router.use('/details',detailsrouter);

module.exports=router