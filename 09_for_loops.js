const prompt = require("prompt-sync")();

// Program to add first n natural numbers(for loop)
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for(let i = 1; i <= n; i++){
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is " + sum);

// for in loop -> to get/print the keys 
let obj = {
    harry : 90,
    shubh : 86,
    shivika : 56,
    rititka : 45,
    shiv : 23
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
}


// for of loop -> to get values of the iterable objcet
for(let b of "Harry Bhai"){
    console.log(b);
}