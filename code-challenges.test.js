// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

/*Pseudo
* create a function giving it the name capitalizeAndDisplay, using arr as the parameter.
* use .map to iterate through the array of objects grabbing the name key value pair
* use .split to create array of names in order to map through and capitalize the first letter.
* we can use .slice to limit capitalization to the first letter of each name.
* add newly capitalized names back together via .join
* use a template literal calling on the capitalized names and the occupation to create the needed description.
*/

// a) Create a test with an expect statement using the variable provided.

describe("capitalizeAndDisplay", () => {
  test("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      {name: "ford prefect", occupation: "a hitchhiker"},
      {name: "zaphod beeblebrox", occupation: "president of the galaxy"},
      {name: "arthur dent", occupation: "a radio employee"}
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.",
      // "Arthur Dent is a radio employee."]
    ]
    expect(capitalizeAndDisplay(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee."])

  })
})

/** ReferenceError: capitalizeAndDisplay is not defined **/

// b) Create the function that makes the test pass.

const capitalizeAndDisplay = (arr) => {
  return arr.map((v) => {
    let splitName = v.name.split(" ")
    let capName = splitName.map((v) => {
      return v.slice(0, 1).toUpperCase() + v.slice(1, v.length + 1)
    })
    capName = capName.join(" ")
    return `${capName} is ${v.occupation}.`
  })
}

/** Tests passed !!! **/

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

/*Pseudo
* create a function giving it the name onlyRemainders, using arr as the parameter.
* use .filter to filter out any value whose type isn't a number
* with the newly filtered array, we can use .map to iterate through each value
* use the modulo operator to find the remainder of each number divided by 3
*/

// a) Create a test with an expect statement using the variables provided.

describe("onlyRemainders", () => {
  test("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//  Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//  Expected output: [ 2, 1, -1 ]
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])

  })
})

/** ReferenceError: onlyRemainders is not defined **/

// b) Create the function that makes the test pass.

const onlyRemainders = (arr) => {
  let filtered = arr.filter((v) => {
    return typeof v === "number"
  })
  return filtered.map((v) =>  v % 3)
}

/** Tests passed !!! **/

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

/*Pseudo
* create a function giving it the name sumCubed, using arr as the parameter.
* use .reduce on the passed in array
* .reduce will iterate through the array performing an action on each value with the set accumulator and initial value.
* set the initial value to 0
* we can use ** 3 to cube each value that is being iterated through and added to the accumulator (previous value)
* return the sum of all the values cubed.
*/

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  test("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
//  Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
//  Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

/** ReferenceError: sumCubed is not defined **/

// b) Create the function that makes the test pass.

const sumCubed = (arr) => {
  let cubeElement = arr.reduce((a, v) => {
    return  a  + (v ** 3)
  }, 0)
  return cubeElement
}


