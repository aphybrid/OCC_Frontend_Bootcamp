//control flow structure

//conditional statement - allows you to execute different block of codes based on a condition

// conditionals - if statement
let age = 18;

if (age >= 18) {
    console.log("you are eligilble to vote")
} else {
    console.log("You are note eligible to vote")
}
//if-else if-=else statment (multiple conditions)

let temperature = 20;
if(temperature < 0) {
    console.log("It's freezing");
} else if (temperature >=0 && temperature < 20) {
    console.log("It's cold outside");
} else {
    console.log("It's a warm day");
}

//conditonals - switch statement

let day = "Monday";
switch (day) {
case 'Monday':
    console.log("Start of the week");
    break;
case "Friday":
    console.log("It's the end of the week");
    break;
default:
    console.log("It's a regular day!");

}