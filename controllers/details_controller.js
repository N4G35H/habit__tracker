const Habit = require("../models/habits")
const { json } = require('express');

// Controllers got get Deatils
module.exports.details = (req, res) => {
    Habit.find({}, (err, habits) => {
        if (err) {
            console.log('Error in fetching the habits');
            return;
        }
        return res.render('details', {
            title: "Habit Tracker Weekly",
            habit_list: habits
        });
    })
}

// Updating the database for the request 
module.exports.updateHabit = (req, res) => {
    let id = req.query.id;
    Habit.findById(id, (err, habit) => {
        if (err) {
            console.log('not found');
            return;
        }
        var newHabit = habit
        let day = req.query.day;
        let val = req.query.val;
        for (let prop in newHabit.days) {
            if (prop == day) {
                if (val == "none") {
                    newHabit.days[day] = "yes";
                    newHabit.streak++
                } else if (val == "yes") {
                    newHabit.days[day] = "no";
                    newHabit.streak--;
                } else {
                    newHabit.days[day] = "none";
                }
            }
        }
        // Updating the data
        Habit.findByIdAndUpdate(id, newHabit, (err, newCreateHabit) => {
            if (err) {
                console.log('Error in Updating');
                return;
            }
            return res.redirect('back');
        })
    })
}