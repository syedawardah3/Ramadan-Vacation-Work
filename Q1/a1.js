"use strict";
// Q1: Write a program that checks whether the given number is positive or negative.
function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    }
    else if (number < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
const inputNumber = 42;
const result = checkNumber(inputNumber);
console.log(`The number ${inputNumber} is ${result}.`);
