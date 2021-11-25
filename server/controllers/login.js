/*
Sierra Surveys Web Application 
- A simple Web Application to mimic a survey creating/taking website

Daniyal Ahmed - 301152472
Soham Rajput - 301180583
Joshua Soriano - 301154852
Parth Shah - 301171805
Mohamed Soliman - 301219444
*/

let express = require('express');
let router = express.Router();
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayLoginPage = (req, res, next) => {
    //check if user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login"
        })
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        //server err
        if(err)
        {
            return next(err);
        }
        //is there a user login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/');
        }
        req.login(user, (err) => {
            //server error?
            if(err)
            {
                return next(err)
            }
            return res.redirect('/')
        });
    })(req, res, next);
}