  /*
  Sierra Surveys Web Application 
  - A simple Web Application to mimic a survey creating/taking website

  Daniyal Ahmed - 301152472
  Soham Rajput - 301180583
  Joshua Soriano - 301154852
  Parth Shah - 301171805
  Mohamed Soliman - 301219444
  */
 
let mongoose = require('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
    name: String,
    question1: String,
    answer1: String,
    question2: String,
    answer2: String,
    question3: String,
    answer3: String
},{
    collection:"surveys"
});

module.exports = mongoose.model('Survey', surveyModel);
