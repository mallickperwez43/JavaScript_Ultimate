// Q1 : Write a JavaScript program to print the following after 2 seconds delay
// Hello
// World

// We will use IIFE
const a = ((text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    })
});

(async () => {
    let text = await a("Hello");
    console.log(text);
    text = await a("World");
    console.log(text);
}
)();

// Q2 : Write a JavaScript program to find average of numbers in an array using spread syntax
function sum(a, b, c) {
    return a + b + c;
}

let x = [1, 3, 5];
console.log(sum(...x) / x.length);

// Q3 : Write a JavaScript function which resolves a Promise after n seconds. the function takes n as the parameter. 
// Use an IIFE to execute the functions with different values of n.

const b = ((text, n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, n * 1000);
    })
});

(async () => {
    let text = await b("I am  resolving after 1 second", 1);
    console.log(text);
    text = await b("I am  resolving after 3 second", 3);
    console.log(text);
    text = await b("I am  resolving after 5 second", 5);
    console.log(text);
})();

// Q4 : Write a simple interest calculator using JavaScript

function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

console.log(simpleInterest(1000, 5, 1));