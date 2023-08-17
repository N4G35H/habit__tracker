// requiring express and creating port
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const path = require('path')
const route = require('./routes/index')
const db = require('./config/mongoose')
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy')
const PORT =process.env.PORT || 8000;
const sassMiddleware = require('node-sass-middleware');

// Using sassMiddleware to import file form scss to css
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css'
}))

//Use router
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static('./assets'))
app.use(expressLayouts)

// extract style and scripts from subpages to layout
app.set('layout extractStyles', true)
app.set('layout extractScripts', true)

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Using Express session
app.use(session({
    name: "Habit Tracker",
    secret: "Jamshed",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}))

// Using Passport 
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser)

// Using Router
app.use('/', route);


// port where server listens
app.listen(PORT, (err) => {
    if (err) {
        console.log('Server not Connected ', err);
        return
    }
    console.log(`Server is running on Port:${PORT}`)
})