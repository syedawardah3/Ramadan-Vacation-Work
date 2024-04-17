// Q3: Write a program to determine the greater of two numbers.
function findGreaterNumber(a: number, b: number): number {
    return Math.max(a, b);
}

const num1 = 42;
const num2 = 73;
const greaterNumber = findGreaterNumber(num1, num2);

console.log(`Between ${num1} and ${num2}, the greater number is ${greaterNumber}.`);