const prompt = require("prompt-sync")();

// Q1 : Write a program to print the marks of a student in an object using for loop
//      obj = {harry : 98, rohan : 70, aakash : 7}

let marks = {
    harry : 90, 
    shubham : 9, 
    lovish : 56, 
    monika : 4
}

for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// Q2 : Write the program in Q1 using for in loop
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key]);
}

// Q3 : Write a program which prints "Try Again" until the user enters the correct number
let correctNumber = 4;
let i;
while(i != correctNumber){
    console.log("Try Again");
    i = prompt("Enter a number : ");
    i = Number.parseInt(i);
}
console.log("You have entered a correct number");

// Q4 : Write a program to find mean of 4 numbers

// making an arrow funcion
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}

console.log("Mean is",mean(4, 5, 6, 7));