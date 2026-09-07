// CLI-Based Calculator using process.argv
// Usage:
// node calculator.js add 10 5
// node calculator.js sub 10 5
// node calculator.js mul 10 5
// node calculator.js div 10 5

const args = process.argv.slice(2);
const operation = args[0];
const a = Number(args[1]);
const b = Number(args[2]);

console.log("Calculator started");
console.log("CLI Input:", args);

if (!operation || args.length < 3) {
    console.log("Usage: node calculator.js <add|sub|mul|div> <number1> <number2>");
    process.exit(1);
}

if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
    case "add":
        result = a + b;
        break;

    case "sub":
    case "subtract":
        result = a - b;
        break;

    case "mul":
    case "multiply":
        result = a * b;
        break;

    case "div":
    case "divide":
        if (b === 0) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        result = a / b;
        break;

    default:
        console.log("Error: Invalid operation.");
        console.log("Use: add, sub, mul, or div.");
        process.exit(1);
}

console.log("Result:", result);
