"use strict";
// Q8: Write a simple calculator program.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Addition
// Subtraction
// Multiplication
// Division
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Please Enter Your First Number: "
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Please Enter Your Second Number: "
    },
    {
        name: "operator",
        type: "list",
        message: "Please Enter Your Operator: ",
        choices: ["+", "-", "/", "*"]
    },
]);
const { firstNumber, secondNumber, operator } = answers;
if (operator === "+") {
    console.log(firstNumber + secondNumber);
}
else if (operator === "-") {
    console.log(firstNumber - secondNumber);
}
else if (operator === "/") {
    console.log(firstNumber / secondNumber);
}
else if (operator === "*") {
    console.log(firstNumber * secondNumber);
}
;
