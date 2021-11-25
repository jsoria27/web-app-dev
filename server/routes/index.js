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

let indexController = require('../controllers/index');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});*/

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET home page. */
router.get('/', indexController.displayHomePage);


module.exports = router;
