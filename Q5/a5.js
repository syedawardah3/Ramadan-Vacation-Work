"use strict";
// Q5: Write a program that greets the user based on the time of day. Display "Good Morning," "Good Afternoon," or "Good Evening" based on the time of day when you run the code.
function getGreetings() {
    let currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
        return "Good Morning";
    }
    else if (currentHour >= 12 && currentHour < 18) {
        return "Good Afternoon";
    }
    else {
        return "Good Evening";
    }
}
const greeting = getGreetings();
console.log(greeting);
