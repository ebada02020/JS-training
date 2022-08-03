
/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 * 
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:

const drinkTypes = ["cola", "lemonade", "water"];
const drinkTray = [];

while (drinkTray.length < 5) {
  console.log("start", drinkTray)
  const randomIndex = Math.floor(Math.random() * drinkTypes.length)
  console.log("randomIndex", randomIndex)
  const ArrayOfDrinks = drinkTray.filter(drink => drink === drinkTypes[randomIndex])
  console.log("ArrayOfDrinks",ArrayOfDrinks)
  if (ArrayOfDrinks.length < 2) {
    drinkTray.push(drinkTypes[randomIndex]);
    console.log("if",drinkTray)
  }
  console.log("drinkTray",drinkTray)

}

console.log(`Hey guys, I brought a ${drinkTray.join()}`);
