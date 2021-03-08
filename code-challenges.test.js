// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// .map()
const mixed_array = (array) => {
  let color_array = []
  for (var i = 0; i < array.length; i++) {
    array[i].shift(" ")
  }
  return array.join(" ")
}
console.log(mixed_array(colors1));
console.log(mixed_array(colors2));

// b) Create the function that makes the test pass.
describe("when an array of strings is called")
  it("removes the first item in array and shuffles remaining items")

  expect("returns a mixed array with the first string missing")




// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
const numsCubed = (array) => {
  let numbers = []
  for (var i = 0; i < array.length; i++) {
    array[i] * 2
  }
  return numbers
}
console.log(numsCubed(cubeAndSum1));
console.log(numsCubed(cubeAndSum2));



// b) Create the function that makes the test pass.
describe("when there is an array of numbers")
  it("returns the numbers cubed")

expect("all the numbers in the array cubed")



// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]
const newArray = (array) => {
  let myArray = []
  for (var i = 0; i < array.length; i++) {
    if array[i] === 2,3
  }
  return myArray.concat("")
}
console.log(newArray(nums1));
console.log(newArray(nums2));

// b) Create the function that makes the test pass.
describe("when an array of numbers is called")
it("returns an array sorted with numbers minimum to maximum")

expect("array of numbers in order from least to greatest")


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"
const strCap = (str) => {
let str.map("").toUpperCase ()
}
return strCap

console.log(strCap(testString1));
console.log(strCap(testString2));

// b) Create the function that makes the test pass.
describe("when a string is called")
  it("takes every other letter in the string and capitalizes them")


  expect("every other letter capitalized")



// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
const dupeArray = (array) => {
  let oneArray = []
  for (var i = 0; i < array.length; i++) {
    array[i].map(1..5)
  }
  return oneArray
}

console.log(dupeArray(testArray1));
console.log(dupeArray(testArray2));

// b) Create the function that makes the test pass.
describe("when two arrays of numbers are called")
it("returns one array with all the numbers")

expect("one array with no duplicate numbers")
