const express = require('express')
const indexRouter = express.Router();

const Trainer = require('../models/trainer')

const allTrainers = require('../services/trainerService.js').allTrainers
const singleTrainer = require('../services/trainerService.js').singleTrainer
const insertTrainer = require('../services/trainerService.js').insertTrainer
const updateTrainer = require('../services/trainerService.js').updateTrainer
const deleteTrainer = require('../services/trainerService.js').deleteTrainer

const trainer = new Trainer()
let storeId;
let editCurrentTrainer;

// Show all trainers .
indexRouter.get('/',(req, res) =>{

		allTrainers()().then(result => {
			res.render('index', {title : 'Trainers', trainer_ : result.result })
		})
})
// Delete selected trainer.
indexRouter.get('/delete/:trainer_id', (req, res) => {

	deleteTrainer(req.params.trainer_id)().then(() => {
		res.redirect('/')
	})
})
// Edit selected trainer.
indexRouter.get('/edit/:trainer_id', (req, res) => {

	storeId = req.params.trainer_id
	allTrainers()().then(result => {
		const allTogether = []
		result.result.find( obj => {
			if( obj.trainer_id === parseInt(storeId)) editCurrentTrainer = obj
			allTogether.push(obj)
		})
	res.render('edit_trainers',{title: 'Update Trainer', trainer_ : allTogether, single : editCurrentTrainer})
	})
})
// Post Updated trainer.
indexRouter.post('/edit', (req, res) => {

	trainer.setFirstName = req.body.fname
	trainer.setLastName = req.body.lname
	trainer.setSubject = req.body.sub
	trainer.setId =req.body.id
		if(storeId == req.body.id){
			updateTrainer([trainer.getFirstName, trainer.getLastName, trainer.getSubject, trainer.getTrainerId])().then( result => {
					res.redirect('/')
			})
		}else res.render('error')
})

// Show trainers list at `/add`.
indexRouter.get('/add', (req, res) => {

	allTrainers()().then(result => {

		res.render('add_trainer',{title : 'New Trainer', trainer_ : result.result})
	})
})
// Post a new trainer.
indexRouter.post('/', (req, res) => {

	insertTrainer([req.body.fname, req.body.lname, req.body.sub])().then(result => {
		res.redirect('/')
	})
})


module.exports = indexRouter


