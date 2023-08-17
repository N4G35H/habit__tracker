const passport = require('passport');
const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password, done) {
        // Find the user and Establish the identity
        User.findOne({ email: email },
            function (err, user) {
                if (err) {
                    console.log('Error in finding the user');
                    return done(err);
                }
                if (!user || user.password != password) {
                    console.log('Invalid Username/Password');
                    return done(null, false);
                }
                // if the user found
                return done(null, user);
            }
        );
    }
));

// serializing the user to decide which key is to kept in the cookies
passport.serializeUser((user, done) => {
    done(null, user.id)
});

// deserializing the user from the key in cookies
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if (err) {
            console.log('Error in the finding user');
            return done(err);
        }
        return done(null, user)
    })
})

// check if the user is authenticated
passport.checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    // if the user is not signed in 
    return res.redirect('/user/login');
}

// Set the User is authenticated
passport.setAuthenticatedUser = (req, res, next) => {
    if (req.isAuthenticated()) {

        res.locals.user = req.user
    }
    next();
}

module.exports = passport;