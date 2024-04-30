const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
}));

// Google Sign In

const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs'); //

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Connect to Database

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./DemoData.db', (err) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Connected to database");
    }
});

// Website

app.use(express.json());

app.get('/', (req, res) => {
    // res.send("")
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});