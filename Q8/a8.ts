// Q8: Write a simple calculator program.
   
// Addition
// Subtraction
// Multiplication
// Division
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name:"firstNumber",
        type:"number",
        message:"Please Enter Your First Number: "
    },
    {
        name:"secondNumber",
        type:"number",
        message:"Please Enter Your Second Number: "
    },
    {
        name:"operator",
        type:"list",
        message:"Please Enter Your Operator: ",
        choices:["+" , "-" , "/" , "*"]
    },
])
const {firstNumber , secondNumber , operator} = answers;
if (operator ==="+"){
    console.log(firstNumber + secondNumber)
}
else if (operator ==="-"){
    console.log(firstNumber - secondNumber)
}
else if (operator ==="/"){
    console.log(firstNumber / secondNumber)
}
else if (operator ==="*"){
    console.log(firstNumber * secondNumber)
};