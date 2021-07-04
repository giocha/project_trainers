const nameValid = (...args) => {

	let arr = []
	let val
	
	for(let i of args) checker = !!i  && /^[a-z]{1,25}$/i.test(i) && i!=='undefined' && i!=='null' ? (val = i) : arr.push(i)
	if (arr.length<1) arr = val

	// console.log('to arr:',arr)
	return arr

}

const subjectValid = (...args) => {
	let result;
	let arr = []
	let counter = [];
	
	args.forEach( arg =>{
		for(let i in arg) counter.push(+i)
		console.log(counter)
		if (arg == '' || counter.length > 25 ){
			arr.push(arg)
			result = arr
		}
		else result = arg
	})
	return result
}

module.exports = {nameValid,
					subjectValid}

/* 
function nameValid :
a.	Checks for more than one arguments .
b.	For each argument performs a validation for:
		i. null
		ii. undefined
		iii. 'null'
		iv.	'undefined'
		v. Spaces between characters
		vi.	Accepts only chars a-z, A-Z
		vii. numbers are not allowed in any case: 5, '5', test5, 5test te5st
c.	Each performing validation returns a state (Value for valid OR an array with non-acceptable values),
	
*/