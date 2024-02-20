const city = 'New York'
const cityStr = 'City'
const shoppingList = 'apples, bananas, oranges, grapes'

// TODO get the INDEX of the character where 'York' word is found in the city variable
const cityIndex = city.split(" ")[1]

// TODO - get the substring "York" from the city variable
const citySubstring = city.substring(3, 4)

// TODO = replace 'York' with 'Delhi'
const cityReplaced = city.replace("York", "Delhi")

// TODO - check if city starts with 'New' and ends with 'York'
const cityStartsWith = city.startsWith("New")
const cityEndsWith = city.endsWith("York")

// TODO - split the shopping list into an array of items without spaces
// hint (you might want to replace first, then split)
const shoppingListArray = shoppingList.split(", ")
// another possible answer
// shoppingList.replace(" ", "").split(",")

// TODO - concatenate two strings using the `${var}` syntax
// make cityStrConcat equal to 'New York City'
const cityStrConcat = `New York ${cityStr}`

module.exports = {
  cityIndex,
  citySubstring,
  cityReplaced,
  cityStartsWith,
  cityEndsWith,
  shoppingListArray,
  cityStrConcat
}
