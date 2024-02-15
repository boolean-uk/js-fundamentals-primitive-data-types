const city = 'New York'
const cityStr = 'City'
const shoppingList = 'apples, bananas, oranges, grapes'

// TODO get the INDEX of the character where 'York' word is found in the city variable
const cityIndex = city.indexOf('York')
console.log(cityIndex)

// TODO - get the substring "York" from the city variable
const citySubstring = city.substring(4, 8)
console.log(citySubstring)

// TODO = replace 'York' with 'New Delhi'
const cityReplaced = city.replace('York', 'Delhi')
console.log(cityReplaced)

// TODO - check if city starts with 'New' and ends with 'York'
const cityStartsWith = city.slice(0, 3) === 'New'
console.log(cityStartsWith)

const cityEndsWith = city.slice(4, 8) === 'York'
console.log(cityEndsWith)

// TODO - split the shopping list into an array of items without spaces
// hint (you might want to replace first, then split)
const shoppingListArray = shoppingList.split(' ')
console.log(shoppingListArray)

// TODO - concatenate two strings using the `${var}` syntax
// make cityStrConcat equal to 'New York City'
const cityStrConcat = `${city} ${cityStr}`

module.exports = {
  cityIndex,
  citySubstring,
  cityReplaced,
  cityStartsWith,
  cityEndsWith,
  shoppingListArray,
  cityStrConcat
}
