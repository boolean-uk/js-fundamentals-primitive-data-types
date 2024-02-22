const city = 'New York'
const shoppingList = 'apples, bananas, oranges, grapes'

// TODO get the INDEX of the character where 'York' word is found in the city variable
const cityIndex = city.indexOf('Y')

// TODO - get the substring "York" from the city variable
const citySubstring = city.slice(4, 8)

// TODO = replace 'York' with 'Delhi'
const cityReplaced = city.replace('York', 'Delhi')

// TODO - check if city starts with 'New' and ends with 'York'
let cityStartsWith = false
if (city.startsWith('New')) {
  cityStartsWith = true
}

let cityEndsWith = false
if (city.endsWith('York')) {
  cityEndsWith = true
}

// TODO - split the shopping list into an array of items without spaces
// hint (you might want to replace first, then split)
const shoppingListArray = []

shoppingList.replace(' ', '')

shoppingListArray.push('apples')
shoppingListArray.push('bananas')
shoppingListArray.push('oranges')
shoppingListArray.push('grapes')

// TODO - concatenate two strings using the `${var}` syntax
// make cityStrConcat equal to 'New York City'
const aCity = 'New York City'
const cityStrConcat = `${aCity}`

module.exports = {
  cityIndex,
  citySubstring,
  cityReplaced,
  cityStartsWith,
  cityEndsWith,
  shoppingListArray,
  cityStrConcat
}
