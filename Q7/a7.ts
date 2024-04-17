// Q7: Write a simple number guessing game. Provide a selected number and a guess. Based on those numbers, give players clues if their guess is higher, lower, or correct.
import inquirer from "inquirer";
const systemGeneratedNumber = Math.floor( Math.random()*6);
let answers = await inquirer.prompt({
    name:"guessedNumber",
    type:"number",
    message:"Please Enter a Number between 1 to 6: "
});
const {guessedNumber}=answers;
console.log(`Guessed Number: ${guessedNumber} and Correct Number is : ${systemGeneratedNumber}`);
if (guessedNumber === systemGeneratedNumber) {
    console.log("Correct Answer! Congratulations You have Win")
}
else if (guessedNumber < systemGeneratedNumber) {
    console.log("Your Guess Number is lower than Correct Number")
}
else if (guessedNumber > systemGeneratedNumber) {
    console.log("Your Guess Number is higher than Correct Number")
}
else {
    console.log("You have Guessed a Number Out of Range.")
}
