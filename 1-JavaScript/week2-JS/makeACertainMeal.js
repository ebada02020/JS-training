/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

const yourMealRecipe = {
  title: "Omelette",
  servings: 2,
  ingredients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"],
};
for (let key in yourMealRecipe) {
  let value;
  if (key === "title") {
    value = yourMealRecipe[key]
    key = 'Meal name'
  } else if (key === "servings") {
    value = yourMealRecipe[key]
    key = 'Serves'
  } else {
    value = yourMealRecipe[key].join()
  }
  console.log(`${key}: ${value}`);
  // if (key === "title") {
  //   console.log(`Meal name: ${yourMealRecipe[key]}`);
  // } else if (key === "servings") {
  //   console.log(`Serves: ${yourMealRecipe[key]}`);
  // } else {
  //   console.log(`ingredients: ${yourMealRecipe[key].join()}`);
  // }
}


