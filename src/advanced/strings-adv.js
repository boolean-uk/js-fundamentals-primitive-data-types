const city = 'New York'
const cityStr = 'City'
const shoppingList = 'apples, bananas, oranges, grapes'

// TODO get the INDEX of the character where 'York' word is found in the city variable
const cityIndex = 4

// TODO - get the substring "York" from the city variable
const citySubstring = city.slice(4, 9)

// TODO = replace 'York' with 'New Delhi'
const cityReplaced = city.slice(0, 4) + 'Delhi'

// TODO - check if city starts with 'New' and ends with 'York'
const cityStartsWith = city.indexOf('New') === 0
const cityEndsWith =
  city.lastIndexOf('York') > 1 && city.charAt(city.length - 1) === 'k'
// console.log(cityEndsWith)
// console.log(city.charAt(city.length-1))

// TODO - split the shopping list into an array of items without spaces
// hint (you might want to replace first, then split)
const noCommaShop = shoppingList.replace(/,/g, '')
const shoppingListArray = noCommaShop.split(' ')
// console.log(shoppingList.split(" "))
// console.log(shoppingList.replace(/,/g, ""))

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
