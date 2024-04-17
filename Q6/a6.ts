// Q6: Write a program that calculates the Body Mass Index (BMI) and categorizes it.
function bodyMassIndex () {
    let weightInKgs=60;
    let heightInMeters= 1.55448;
    return weightInKgs / heightInMeters;
}
let bmi = bodyMassIndex();
if (bmi < 18.5) {
    console.log("you are very underweight and possibly malnourished.")
}
else if (bmi >=18.5 && bmi <= 24.9) {
    console.log("you have a healthy weight.")
}
else {
    console.log('You are Overweight.')
}
