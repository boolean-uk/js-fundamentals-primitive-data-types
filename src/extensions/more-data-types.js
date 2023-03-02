// TODO: Replace the empty string in the lines below using Javascript with the correct data types
const aNull = null
const undef = undefined
const yes = true
const no = false
// 1. Set this variable to be null
const nullVariable = aNull
function getType(v) {
  if (v === null) return 'null'
  else return typeof v
}
console.log(nullVariable)
// 2. Set this variable to be true
const trueVariable = yes
function getType(v) {
  if (v === true) return 'true'
  else return typeof v
}
console.log(trueVariable)
// 2. Set this variable to be false
const falseVariable = no
function getType(v) {
  if (v === false) return 'false'
  else return typeof v
}
console.log(falseVariable)
// 3. Set this variable to be undefined
const undefinedVariable = undef
function getType(v) {
  if (v === undefined) return 'undefined'
  else return typeof v
}
console.log(undefinedVariable)
// 4. get the typeof each of the above variables
// hint you can use typeof variable to return a string of the variable type
const typeOfTrueVariable = 'boolean'
const typeOfFalseVariable = 'boolean'
const typeOfUndefinedVariable = 'undefined'

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
