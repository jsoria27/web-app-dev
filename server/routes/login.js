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
let mongoose = require('mongoose');

let loginController = require('../controllers/login');

/*GET route for displaying the login page */
router.get('/', loginController.displayLoginPage);

/*POST route for processing the login page */
router.post('/', loginController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', loginController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', loginController.processRegisterPage);

module.exports = router;