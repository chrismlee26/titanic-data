const data = require('./titanic-passengers.json');
// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// ===============================================================

// ---------------------------------------------------------------
// 1 -------------------------------------------------------------
// Return an array of all the values in data for a given property
// For example if property = 'fare' the output should be a list of 
// all fares something like: [7.3125, 15.75, 7.775, 10.5, ...]
// Or if property = 'age' -> [40, 26, 22, 28, 23, 45, 21, ...]

const getAllValuesForProperty = (data, property) => {
	return data.map(data => data.fields[property])
}

// console.log(getAllValuesForProperty(data, 'fare'));

// 2 -------------------------------------------------------------
// Return an array where a given property matches the given value
// For example property = 'sex' and value = 'male' returns an 
// array of all the male passengers [{...}, {...}, {...}, ...]

const filterByProperty = (data, property, value) => {
	return data.map(data => data.fields[property] === value)
}

// console.log(filterByProperty(data, 'sex', 'age'));

// 3 -------------------------------------------------------------
// Filter out missing or null values
// Return an array where the objects that have undefined for a 
// given property have been removed

const filterNullForProperty = (data, property) => {
	return data.filter(data => data.fields[property] !== null || NaN || undefined)
}

// console.log(filterNullForProperty(data, 'age'));

// 4 -------------------------------------------------------------
// Abstract the sum by creating a function that returns the sum 
// for any (numeric) property
// Return the total of all values for a given property. This

const sumAllProperty = (data, property) => {
	let filterFirst = data.filter(data => data.fields[property] != null || NaN || undefined)
	return filterFirst.reduce((acc, filterFirst) => {
		return (acc += filterFirst.fields[property])
	}, 0)
}

// console.log(sumAllProperty(data, "age"), '4.1')
// console.log(sumAllProperty(data, "fare"), '4.2')


// 5 -------------------------------------------------------------
// Count unique values for property. The goal here is return an 
// object with keys equal to the unique values for a property and
// values equal to the number of times that property appears. For
// example the embarked property has three unique values: S, C, 
// and Q, and a couple passengers have undefined for this property. 
// So the output should be: { S: 644, C: 168, Q: 77, undefined: 2 }
// That is 644 passengers embarked at South Hampton. 168 embarked 
// at Cherbourg, 77 embarked at Queenstown, and 2 are undefined

const countAllProperty = (data, property) => { 
	let count = {}
	data.map(data => {
			count[data.fields[property]] = count[data.fields[property]] + 1 || 1
	})
	return count
}

// console.log(countAllProperty(data, "sex"))
// console.log(countAllProperty(data, "embarked"))

// 6 ------------------------------------------------------------
// Make histogram. The goal is to return an array with values 
// of a properties divided into buckets and counting the number
// of items in each bucket.

const makeHistogram = (data, property, step) => {
	// step = 0
	// Map all values to a new variable with property as fields.property
	// let fieldProperty = data
		// .map(p => p.fields[property])
		// make undefined = 0
		// sort values 
		// .sort((a, b) => a - b)
		//  this returns an array of sorted values

		// add all values together 
		// divide by step

		// Return: [bucket1: 0, bucket2: 0, bucket3: 0, bucket4: 0, bucket5: 0, bucket 6: 0]	
		const fieldProperty = data
			.map(p => p.fields[property])
			.filter(p => p !== undefined)
			.sort((a, b) => a - b)
			.reduce((acc, p) => {
				return (acc += p)
			}
			, 0)
}

console.log(makeHistogram(data, "fare", 10))
// makeHistogram(data, "age", 15)
// console.log(makeHistogram(data, "age", 2))

// 7 ------------------------------------------------------------
// normalizeProperty takes data and a property and returns an 
// array of normalized values. To normalize the values you need
// to divide each value by the maximum value in the array.

const normalizeProperty = (data, property) => {
	const mapProperty = data
		.filter(data => data.fields[property] !== undefined)
		.map(data => data.fields[property])
	const maxProperty = Math.max(...mapProperty)
	return mapProperty.map(mapProperty => mapProperty / maxProperty)
}

// console.log(normalizeProperty(data, "age"))
// console.log(normalizeProperty(data, "fare"))

// 8 ------------------------------------------------------------
// Write a function that gets all unique values for a property. 
// Given the array of data and a property string it should return
// an array of all of the unique values under that property. 
// For example if the property string were "sex" this function 
// would return ['male', 'female']

const getUniqueValues = (data, property) => {
	let checkValues = data.map(data => data.fields[property])
	return Array.from(new Set(checkValues))
}

// console.log(getUniqueValues(data, 'sex'))

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getAllValuesForProperty,
	filterByProperty,
	filterNullForProperty,
	sumAllProperty,
	countAllProperty,
	makeHistogram,
	normalizeProperty,
	getUniqueValues
}