// Random Dice Generator using Node.js crypto module

const crypto = require("crypto");

const requestedRolls = Number(process.argv[2]) || 1;

if (!Number.isInteger(requestedRolls) || requestedRolls < 1) {
    console.log("Error: Enter a positive whole number of rolls.");
    process.exit(1);
}

console.log("Dice Generator Started");
console.log("Number of rolls:", requestedRolls);

for (let i = 1; i <= requestedRolls; i++) {
    // randomInt generates a value from min (inclusive) to max (exclusive)
    const diceValue = crypto.randomInt(1, 7);
    console.log(`Roll ${i}: Dice Rolled: ${diceValue}`);
}
