const nameValid = (...args) => {

	let arr = []
	let val
	
	for(let i of args) checker = !!i  && /^[a-z]+$/i.test(i) && i!=='undefined' && i!=='null' ? (val = i) : arr.push(i)
	if (arr.length<1) arr = val

	// console.log(arr)
	return arr

}

module.exports = {nameValid}

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