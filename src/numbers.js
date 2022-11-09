// do not edit these lines
const numOne = 8
const numTwo = 16
const numThree = 32

// TODO: Replace NaN below using Javascript numeric operators so that the tests pass
//       eg  myAnswer = numOne * 42
//       NOT myAnswer = 336

// 1. Set this variable to numOne added to numTwo
const numOnePlusNumTwo = numOne + numTwo
console.log('1. Number one plus number two: ' + numOnePlusNumTwo)

// 2. Set this variable to numThree multiplied by numTwo
const numThreeTimesNumTwo = numThree * numTwo
console.log('2. Number three multiplied by number two: ' + numThreeTimesNumTwo)

// 3. Set this variable to numThree divided by numOne
const numThreeDividedByNumOne = numThree / numOne
console.log('3. Number three divided by number one: ' + numThreeDividedByNumOne)

// 4. Set this variable to numThree minus numOne
const numThreeMinusNumOne = numThree - numOne
console.log('4. number three minus number one: '+ numThreeMinusNumOne)

// 5. Set this variable to the sum of numOne, numTwo and numThree
const sum = numOne + numTwo + numThree
console.log('5. sum of all variables: ' + sum )

// 6. Set this variable to the sum of (numOne, numTwo, numThree) divided by numOne
const numBytes = (numOne + numTwo + numThree) / numOne
console.log('6. sum of all three variables divided by variable numOne: ' + numBytes) 

// do not edit the exported object.
module.exports = {
  a: numOnePlusNumTwo,
  b: numThreeTimesNumTwo,
  c: numThreeDividedByNumOne,
  d: numThreeMinusNumOne,
  e: sum,
  f: numBytes
}
