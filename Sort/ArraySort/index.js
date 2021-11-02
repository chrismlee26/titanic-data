const numbers = [10,51,330,277,2112,99]
const strings = ['Hello', 'World', 'Foo', 'Bar']
const objs = [
  {name:'Cob', age: 19},
  {name:'Bob', age: 29},
  {name:'Amy', age: 25},
  {name:'Dan', age: 32}
]

// Array sort is used to sort an array
// Array sort mutates the original array

// Without a callback sorts by charachter order

console.log('-- Sort strings --')
// Sort the strings: 
strings.sort((a,b) => a - b)
console.log(strings) // Sorted alphabetically

console.log('-- Sort numbers not correct --')
// Sort numbers: 
numbers.sort((a,b) => a-b)
console.log(numbers)
// Sorted alphabetically

console.log('-- Sort objs --')
objs.sort((a,b) => a.name - b.name)
console.log(objs) // The order is unchanged


// How to sort anything. Facts about Array sort: 

// Without a callback sort is alphabetical
// With a callback the callback determines the sort
// The callback takes two parameters a and b
// a and b will two elements from the source array
// The callback must return a numeric value
// If the value is less than 0 a is indexed before b
// If the value is greater than 0 b is indexed before a
// If the value is 0 the index of a and b is not changed

// Sort numbers: 
console.log('-- Sort numbers correct --')
numbers.sort((a, b) => a - b)
// Subtract b from a to perform sort
console.log(numbers)
// The numbers are sorted

console.log('-- Sort ages correct --')
// Sort objects on a field: 
// Sort on age: 
objs.sort((a, b) => a.age - b.age)

console.log(objs)


console.log('-- Sort names correct --')
// Sort on the name field: 
objs.sort((a, b) => (a.name > b.name) ? 1 : -1)
// Here you compared the two names with the >
// Strings have a numeric code 
console.log(objs)



const test = ['9','8','7','6','5','4','2','1','3','a','d','b','c','0']
test.sort()
console.log(test)