import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

data.sort((a, b) => {
  // const x = a.fields.embarked !== undefined ? a.fields.embarked.charCodeAt(0) : 0
  // const y = b.embarked !== undefined ? b.fields.embarked.charCodeAt(0) : 0
  // return x - y
  if (a.fields === 'S') {
    return 1
  }

  return -1
})

// data.sort((a, b) => {
//   if (a.fields.sex === "male") {
//     return -1
//   } else {
//     return 1
//   }
// })

// data.sort((a, b) => {
//   if (a.fields.survived === "Yes") {
//     return -1
//   } else {
//     return 1
//   }
// })

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid' // 'display'
// grid-template-columns 
titanic.style.gridTemplateColumns = 'repeat(20, 25px)'
titanic.style.gridGap = '1px' // grid-gap -> gridGap
titanic.style.gridGap = '1px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  p.style.width = '25px'
  p.style.height = '25px'
  if (data[i].fields.embarked === "S") {
	  p.style.backgroundColor  = 'tomato'
  } else if (data[i].fields.embarked === "C") {
	  p.style.backgroundColor  = 'gold'
  }if (data[i].fields.embarked === "Q") {
	  p.style.backgroundColor  = 'blue'
  } else {
    // p.style.backgroundColor = 'black'
  }

  if (data[i].fields.survived === "No"){
    p.style.opacity = "0.3"
  }
  
  p.style.borderRadius = data[i].fields.sex === 'female' ? "70%" : "0"
})

// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 



// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'