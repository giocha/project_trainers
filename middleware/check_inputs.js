const user_inputs = (...args) => {

	let message = '';
	let subject_store;
	let arr_index_falsy = []
	args.forEach((arg, index) => {
		if (typeof arg !== 'string'){

			if(index == 2 && arg != ''){
				subject_store = arg
				console.log(subject_store)
			}
			arr_index_falsy.push(index)
		}
	})

	if(arr_index_falsy.includes(0) || arr_index_falsy.includes(1)) 
	message = `Only characters (a-Z) are allowed as Full Name.` 

	if((arr_index_falsy.includes(0) || arr_index_falsy.includes(1)) && (arr_index_falsy.includes(2) && subject_store === undefined)) 
	message =`Only characters (a-Z) are allowed as Full Name as well as 'Subject' field can not be empty.`

	if ((arr_index_falsy.includes(2) && subject_store === undefined) && !arr_index_falsy.includes(0) && !arr_index_falsy.includes(1)) 
	message = `Field 'Subject' can not be empty. `

	return message 
}


module.exports = { user_inputs }

/* 
	function user_inputs Is responsible for :
		a. checking the user inputs and return the appropriate message 
		b. if any argument is NOT a string then the message responses with an invalid message
		c. if any argument is a string then the message returned is an empty string
	
	This function is used for the routes of the app . and checks whether should return an error message or proceed the functionality 
*/
