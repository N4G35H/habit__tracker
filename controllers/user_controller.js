const User = require('../models/user');
const passport = require('passport')

// controller of login Page
module.exports.login = (req, res) => {
    return res.render('login', {
        title: 'Login'
    })
}

// Controller of  sign up page
module.exports.signup = (req, res) => {
    return res.render('signUp', {
        title: 'Signup'
    })
}

// Controller to create a User
module.exports.create = (req, res) => {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) {
            console.log('Error to finding the user in signing up');
            return
        }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log('Error to Creating user in Signing Up');
                    return
                }
                return res.redirect('/user/login');
            })
        }
        else {
            return res.redirect('back');
        }
    })
}

// Controller to Create a user session
module.exports.createSession = (req, res) => {
    return res.redirect('/')
}

// Controller to delete the Session of user 
module.exports.signout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            console.log('Error in sign Out')
        }
    })
    return res.redirect('/user/login')
}