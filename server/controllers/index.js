
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

let userModel = require('../models/user');
let User = userModel.User; // alias

//method to display home page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Landing', displayName: req.user ? req.user.displayName : ''});
}

//method to display about page
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About', displayName: req.user ? req.user.displayName : ''});
}

//methoid to display products page
module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products', displayName: req.user ? req.user.displayName : ''});
}

//method to display services page
module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', displayName: req.user ? req.user.displayName : ''});
}

//method to display contact page
module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact', displayName: req.user ? req.user.displayName : ''});
}
