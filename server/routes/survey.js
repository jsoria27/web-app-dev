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

//connect to our survey Model
let Survey = require('../models/survey');

let surveyController = require('../controllers/survey');

/* GET Route for the survey List page - READ OPERATION*/
router.get('/', surveyController.displaySurveyList);
/* GET Route for DISPLAYING the ADD page - CREATE OPERATION*/
router.get('/add', surveyController.displayAddPage);
/* POST Route for processing the ADD page - CREATE OPERATION*/
router.post('/add', surveyController.processAddPage);
/* GET Route for DISPLAYING the EDIT page - UPDATE OPERATION*/
router.get('/edit/:id', surveyController.displayEditPage);
/* POST Route for PROCESSING the EDIT page - UPDATE OPERATION*/
router.post('/edit/:id', surveyController.processEditPage);
/* GET to perform survey DELETION - DELETE OPERATION*/
router.get('/delete/:id', surveyController.performDelete);

module.exports = router;



