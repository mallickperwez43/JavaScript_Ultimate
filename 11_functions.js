const prompt = require("prompt-sync")();

// Function : A block of code designed to a particular task
/* syntax 
    function funcName(parameter1, parameter2){
        code block
    }
*/

// arrow function
const sum = (p, q) => {
    return p + q;
}

// no argumnets arrow function
const hello = () => {
    console.log("Hello , How are you? I'm fine");
    return "Nice to meet you";
}

// function with arguments -> older JS function syntax
function onePlusAvg(x, y){
    return Math.round(1 + (x + y) / 2);  // floor value -> round
}

let a = prompt("Enter a : ")
a = Number.parseInt(a);
let b = prompt("Enter b : ")
b = Number.parseInt(b);
let c = prompt("Enter c : ")
c = Number.parseInt(c);

console.log("One plus Average of a and b : ", onePlusAvg(a, b));
console.log("One plus Average of b and c : ", onePlusAvg(b, c));
console.log("One plus Average of a and c : ", onePlusAvg(a, c));
console.log(sum(a, b));
console.log(hello());