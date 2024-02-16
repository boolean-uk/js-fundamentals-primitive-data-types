const city = 'New York'
const cityStr = 'City'
const shoppingList = 'apples, bananas, oranges, grapes'

// TODO get the INDEX of the character where 'York' word is found in the city variable
//The indexOf() method is used to find the index of the first occurrence of a specified substring ('York' in this case) within the string.
const cityIndex = city.indexOf('York');

// TODO - get the substring "York" from the city variable
/*city.substring(cityIndex, cityIndex + 4): This part of the line calls the substring() method on the city string.

cityIndex: This is the starting index from where the substring extraction begins. In this case, it's the index where 'York' starts in the city string, as determined in the previous line.

cityIndex + 4: This is the ending index of the substring extraction. Since 'York' is 4 characters long, we add 4 to cityIndex to get the ending index.*/
const citySubstring = city.substring(cityIndex, cityIndex + 4);

// TODO = replace 'York' with 'Delhi'
const cityReplaced = city.replace('York', 'Delhi');

// TODO - check if city starts with 'New' and ends with 'York'
const cityStartsWith = city.startsWith('New');
const cityEndsWith = city.endsWith('York');

// TODO - split the shopping list into an array of items without spaces
// hint (you might want to replace first, then split)
const shoppingListArray = shoppingList.split(', ').map(item => item.trim());

// TODO - concatenate two strings using the `${var}` syntax
// make cityStrConcat equal to 'New York City'
const cityStrConcat = `${city} ${cityStr}`;

module.exports = {
  cityIndex,
  citySubstring,
  cityReplaced,
  cityStartsWith,
  cityEndsWith,
  shoppingListArray,
  cityStrConcat
}
