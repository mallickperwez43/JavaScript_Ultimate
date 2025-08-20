// Hoisting
// It refers to the process whereby the interpreter apprears to move the declarations at the top of the code before execution
// Variables can be referenced before they are declared in JavaScript

console.log(a); // undefined
// console.log(b); // error because b is initialised using let
// console.log(c); // error because b is initialised using const

greet(); // Will work here

meet(); // Will not work as hoisted because its a function expression

function greet() {
    console.log("Hello!!")
}

// NOTE : JS only hoists the declarations, not intitializatons. The variable will be undefined until the line where it is initialized is reached

var a = 9; // Declaration is hoisted at the top, but initialization is not
console.log(a); // 9

// Hoisting with let and var are different

let b = 18;
const c = 19;
console.log(b);

// NOTE : Function expressions and class expressions are not hoisted

let meet = function () {
    console.log("Meeting")
}