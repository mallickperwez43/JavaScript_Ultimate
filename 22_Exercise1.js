const prompt = require("prompt-sync")();
// Guess the number

// Q : Write the JS program to generate a random number and store it in a variable
// The program then takes an input from the user to tell them  whether the guess was
// correct, greater or lesser than the original number
// (100 - (noOfGuesses)) is the score of the user
// The program is expected to terminate once the number is guessed
// Number should be between (1 - 100)

let randomNum = Math.ceil(Math.random() * 100);
let score = 100;
let inputNum = prompt("Enter the num : ");
inputNum = Number.parseInt(inputNum);

while(randomNum != inputNum){
    if(randomNum == inputNum){
        break;
    }
    else if(randomNum > inputNum){
        score--;
        console.log("The number is greater");
        inputNum = prompt("Enter the num : ");
        inputNum = Number.parseInt(inputNum);
    }
    else if(randomNum < inputNum){
        score--;
        console.log("The number is lesser");
        inputNum = prompt("Enter the num : ");
        inputNum = Number.parseInt(inputNum);
    }
}

console.log("The random number was :", randomNum);
console.log("Score :", score);