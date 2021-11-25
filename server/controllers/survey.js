let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create reference to model
let Survey = require('../models/survey');

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err){
            return console.error(err);
        }
        else{
            //console.log(surveyList);
            res.render('survey/list', {title: 'Surveys', SurveyList: surveyList});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', {title: 'Add Survey'});
}

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "question1": req.body.question1,
        "answer1": req.body.answer1,
        "question2": req.body.question2,
        "answer2": req.body.answer2,
        "question3": req.body.question3,
        "answer3": req.body.answer3
    });

    Survey.create(newSurvey, (err, Survey) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the Survey list
            res.redirect('/survey');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('survey/edit', {title: 'Edit Survey', survey: surveyToEdit});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedSurvey = Survey({
        "_id": id,
        "name": req.body.name,
        "question1": req.body.question1,
        "answer1": req.body.answer1,
        "question2": req.body.question2,
        "answer2": req.body.answer2,
        "question3": req.body.question3,
        "answer3": req.body.answer3
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the Survey list
            res.redirect('/survey');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id:id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the Survey list
            res.redirect('/survey');
        }
    });
}