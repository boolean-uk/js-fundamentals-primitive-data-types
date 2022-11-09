// do not edit these lines
const numOne = 8
const numTwo = 16
const numThree = 32

// TODO: Replace NaN below using Javascript numeric operators so that the tests pass
//       eg  myAnswer = numOne * 42
//       NOT myAnswer = 336

// 1. Set this variable to numOne added to numTwo
const numOnePlusNumTwo = NaN

// 2. Set this variable to numThree multiplied by numTwo
const numThreeTimesNumTwo = NaN

// 3. Set this variable to numThree divided by numOne
const numThreeDividedByNumOne = NaN

// 4. Set this variable to numThree minus numOne
const numThreeMinusNumOne = numThree - numOne
console.log(numThreeMinusNumOne)

// 5. Set this variable to the sum of numOne, numTwo and numThree
const sum = numOne + numTwo + numThree
console.log(sum)

// 6. Set this variable to the sum of (numOne, numTwo, numThree) divided by numOne
const numBytes = sum / numOne
console.log(numBytes)

// do not edit the exported object.
module.exports = {
  a: numOnePlusNumTwo,
  b: numThreeTimesNumTwo,
  c: numThreeDividedByNumOne,
  d: numThreeMinusNumOne,
  e: sum,
  f: numBytes
}
