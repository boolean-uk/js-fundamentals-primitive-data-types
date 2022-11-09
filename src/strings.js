// do not edit these lines
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const firstName = 'Jane'
const secondName = 'Smith'

// TODO: Replace null in the lines below using Javascript string operations
//         and the variables above so that the tests pass.
//       eg  twoJanes = firstName + firstName
//       NOT twoJanes = "JaneJane"

// 1. Set this variable to firstName and secondName concatenated
const fullName = firstName + " " + secondName
console.log('1. Full Name: ' + fullName)

// 2. Set this variable to the 10th character of the alphabet variable
const tenthCharacterOfAlphabet = alphabet.charAt(9)
console.log('2. The 10th letter of the alphabet is: ' + tenthCharacterOfAlphabet)

// 3. Set this variable by calling a method on the alphabet variable to transform it to lower case
const lowerCaseAlphabet = alphabet.toLowerCase()
console.log('3. alphabet changed to lowercase: ' + lowerCaseAlphabet)

// 4. Set this variable by using a property on the alphabet variable to get it's length
const numberOfLettersInAlphabet = alphabet.length
console.log('4. gives the number of charachters in the variable: ' +numberOfLettersInAlphabet)

// do not edit the exported object.
module.exports = {
  a: fullName,
  b: tenthCharacterOfAlphabet,
  c: lowerCaseAlphabet,
  d: numberOfLettersInAlphabet
}
