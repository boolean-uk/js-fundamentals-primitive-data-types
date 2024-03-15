// TODO: Replace the empty string in the lines below using Javascript with the correct data types

// 1. Set this variable to be null
const nullVariable = null
console.log(nullVariable)

// 2. Set this variable to be true
const trueVariable = true
console.log(trueVariable)

// 2. Set this variable to be the opposite of the trueVariable (ie. false);
const falseVariable = !trueVariable
console.log(falseVariable)

// 3. Set this variable to be undefined
const undefinedVariable = undefined
console.log(falseVariable)

// 4. get the typeof each of the above variables
// hint you can use typeof variable to return a string of the variable type
const typeOfTrueVariable = typeof trueVariable
const typeOfFalseVariable = typeof falseVariable
const typeOfUndefinedVariable = typeof undefinedVariable
console.log(typeOfTrueVariable)
console.log(typeOfFalseVariable)
console.log(typeOfUndefinedVariable)

// do not edit the exported object.
module.exports = {
  a: nullVariable,
  b: trueVariable,
  c: falseVariable,
  d: undefinedVariable,
  e: typeOfTrueVariable,
  f: typeOfFalseVariable,
  g: typeOfUndefinedVariable
}
