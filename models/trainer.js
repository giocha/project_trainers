const nameValid = require('./valid_trainer').nameValid

const Trainer = (() => {

	const _trainer_id = new WeakMap();
	const _first_name = new WeakMap();
	const _last_name = new WeakMap();
	const _subject = new WeakMap();

	class Trainer {

		constructor(trainer_id = -1,first_name = -1, last_name = -1, subject = -1){

			_trainer_id.set(this, trainer_id)
			_first_name.set(this, first_name)
			_last_name.set(this, last_name)
			_subject.set(this, subject)
		}

		get getTrainerId () {

			return _trainer_id.get(this)
		}

		get getFirstName () {

			return _first_name.get(this)
		}

		get getLastName () {

			return _last_name.get(this)
		}

		get getSubject () {

			return _subject.get(this)
		}
		set setId (val) {

			_trainer_id.set(this, val)
		}

		set setFirstName (val) {
			
			if(nameValid(val)) _first_name.set(this,nameValid(val))
		}

		set setLastName (val) {
			
			if(nameValid(val) == val) {_last_name.set(this, nameValid(val))}
			
		}

		set setSubject (val) {

			_subject.set(this, val)
			
		}

		get getTrainerDetails () {

			return {
				trainer_id : this.getTrainerId,
				first_name : this.getFirstName,
				last_name  : this.getLastName,
				subject    : this.getSubject
			}
		}
	}

	return Trainer

})()

module.exports = Trainer