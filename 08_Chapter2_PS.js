// Chapter 2 PS
const prompt = require("prompt-sync")();

// Q1 : Use logical operators to find whether the age of a person lies b/w 10 to 20
let age = prompt("Enter your age");
age = Number.parseInt(age)
if(age > 10 && age < 20){
    console.log("Your age lies between 10 and 20");
} 
else{
    console.log("Your age doesnt lie between 10 and 20");
}

// Q2 : Demonstarte the use of switch case statements in JS
let mood = prompt("Enter your mood : ");
switch(mood){
    case '10' : 
        console.log("Seems in a lite mood");
        break;
    case '30' : 
        console.log("Seems in a lazy mood");
        break;
    case '50' : 
        console.log("Seems in a active mood");
        break;
    case '80' : 
        console.log("Seems in a proactive mood");
        break;
    default :
        console.log("Angry bird");
}

// Q3 : Write a JS program to find whether a number is divisible by 2 and 3
let num = prompt("Enter a number : ");
num = Number.parseInt(num);
if((num % 2 == 0) && (num % 3 == 0)){
    console.log("Divisible by both 2 and 3");
}
else if(num % 2 == 0){
    console.log("Divisible by 2 only");
}
else if(num % 3 == 0){
    console.log("Divisible by 3 only");
}
else{
    console.log("Neither divisible by 2 nor 3");
}

// Q4 : Using Ternary Opeartor decide if can drive or not 
// age less than 18 cannot drive

let age1 = prompt("Enter age");
age1 = Number.parseInt(age1);
console.log("You can", (age1 < 18) ? "not drive as you are minor" : "drive as you are major");