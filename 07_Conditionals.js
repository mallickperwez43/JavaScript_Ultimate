const prompt = require("prompt-sync")();

let a = prompt("Hey whats your age?") 
// console.log(a)
// prompt always makes string of the input

a = Number.parseInt(a) // converting the string to a number
if(a < 0){
    console.log("This is a invalid age!");
}
else if(a < 9){
    console.log("You are a kid and you cannot even think of driving");
}
else if(a < 18 && a >= 9){
    console.log("You are a kid and you can think of driving after 18");
}
else{
    console.log("You can now drive as you are above 18");
}
console.log("Done");

// HomeWork
// Switch in JS
let fruit = prompt("Enter the fruit you want and you will get the price / kg : ");
switch(fruit){
    case "Oranges" :
        console.log("Price = 89 rupees / kg");
        break;
    case "Mangoes" :
        console.log("Price = 110 rupees / kg");
        break;
    case "Apples" : 
        console.log("Price = 120 rupees / kg");
        break;
    default :
        console.log("Sorry, Out of stock");
}

// Ternary Operator
console.log("You can", (a < 18 ? "not drive" : "drive"));