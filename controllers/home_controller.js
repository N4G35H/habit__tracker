const Habit = require("../models/habits");

// homepage Controller
module.exports.home=(req,res)=>{
    Habit.find({},(err,habits)=>{
        if(err){
            console.log('Error in Fetching the habits');
            return;
        }
        return res.render('home',{
            title:'Habit Tracker',
            habit_list:habits
        })
    })
}

// Controller to Create habit
module.exports.createhabit=(req,res)=>{
    let days={
        one:"none",
        two:"none",
        three:"none",
        four:"none",
        five:"none",
        six:"none",
        seven:"none",
    }
    Habit.create({
        habit:req.body.habit,
        start:req.body.start,
        end:req.body.end,
        description:req.body.description,
        frequency:req.body.frequency,
        date:Date(),
        time:req.body.time,
        days:days
    },(err,newHabit)=>{
        if(err){
            console.log('Error in creating habit',err);
            return;
        }
        console.log(newHabit);
        return res.redirect('back');
    });
}

// Controller to delete Habit
module.exports.deletehabit=(req,res)=>{
    let id=req.query.id;
    Habit.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log('Error in Deleting Habit');
            return; 
        }
        return res.redirect('back');
    });
}