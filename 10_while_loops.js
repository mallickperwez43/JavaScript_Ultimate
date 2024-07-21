const prompt = require("prompt-sync")();

// while loop
let n = prompt("Enter the value of n : ");
n = Number.parseInt(n);
let i = 0;
while(i < n){
    console.log(i);
    i++;
}


// do while loop -> atleast executed once
let a = prompt("Enter the value of a : ");
a = Number.parseInt(a);
let b = 0;
do{
    console.log(b);
    b++;
}while(b < a)