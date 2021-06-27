
const mysql = require('mysql2')
const config = require('../config/db.json');

const getAllTrainers = require('../database/index').getAllTrainers
const getSingleTrainer= require('../database/index').getSingleTrainer
const insertNewTrainer = require('../database/index').insertNewTrainer
const updateCurrentTrainer = require('../database/index').updateCurrentTrainer
const deleteCurrentTrainer = require('../database/index').deleteCurrentTrainer
const database_procedure = require('../database/index').database_procedure

 function allTrainers() {

	return database_procedure(getAllTrainers,mysql,config)
}

function singleTrainer(param) {

	return database_procedure(getSingleTrainer,mysql,config,param)
}

function insertTrainer(param) {
	
	return database_procedure(insertNewTrainer,mysql,config,param)
}

function updateTrainer(param) {

	return database_procedure(updateCurrentTrainer,mysql,config,param)
}


function deleteTrainer(param) {

	return database_procedure(deleteCurrentTrainer,mysql,config,param)
}



module.exports = {
	allTrainers,
	singleTrainer,
	insertTrainer,
	updateTrainer,
	deleteTrainer,
	 }


