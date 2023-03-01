// TODO: Replace the empty string in the lines below using Javascript with the correct data types

// 1. Set this variable to be null
const nullVariable = null

// 2. Set this variable to be true
const trueVariable = true

// 2. Set this variable to be false
const falseVariable = false

// 3. Set this variable to be undefined
const undefinedVariable = undefined

// 4. get the typeof each of the above variables
// hint you can use typeof variable to return a string of the variable type
function getType(v) {
  // Extra check for null as typeof null is 'object'!
  if (v === null) return 'null'
  else return typeof v
}
const typeOfTrueVariable = getType(trueVariable)
const typeOfFalseVariable = getType(falseVariable)
const typeOfUndefinedVariable = getType(undefinedVariable)

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
