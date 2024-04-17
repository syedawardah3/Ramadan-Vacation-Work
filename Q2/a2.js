"use strict";
// Q2: Write a program that checks if a number is even or odd.
function isEvenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
let inputNumber = 32;
const result = isEvenOdd(inputNumber);
console.log(`The number ${inputNumber} is ${result}.`);
