// Demonstration of custom module creation and reusability

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

console.log("Custom Module Demo Started");

logger("Checking numbers using the reusable isEven module");

const numbers = [2, 5, 10, 13, 20];

numbers.forEach((number) => {
    console.log(`${number} is ${isEven(number) ? "Even" : "Odd"}`);
});

logger("Custom modules executed successfully");
