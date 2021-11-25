  /*
  Sierra Surveys Web Application 
  - A simple Web Application to mimic a survey creating/taking website

  Daniyal Ahmed - 301152472
  Soham Rajput - 301180583
  Joshua Soriano - 301154852
  Parth Shah - 301171805
  Mohamed Soliman - 301219444
  */
 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
