const prompt = require("prompt-sync")();

// Q1 : Create an array of numbers and take input from the user to add numbers to this array
let arr = [1, 2, 3, 5, 6, 7, 83];
let a = prompt("Enter a number : ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr); 

// Q2 : Keep adding numbers to the array in Q1 until 0 is added to the array
let b;
do{
    b = prompt("Enter a number : ");
    b = Number.parseInt(b);
    arr.push(b); 
}while(b != 0);
console.log(arr);

// Q3 : Filter for numbers divisible by 10 from a given array
let arr2 = [1, 20, 30, 5, 60, 70, 83, 90, 67, 7];
let n = arr2.filter((x)=>{
    return (x % 10 == 0);
});
console.log(n);

// Q4 : Create an array of squares of given numbers
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let m = arr3.map((y)=>{
    return (y * y);
});
console.log(m);

// Q5 : Use reduce to calculate factorial of a given numbers from an array of firstn natural numbers(n being the number whos factorial needs to be calculated)
let naturalNum = [1, 2, 3, 4, 5, 6, 7, 8];
let fact = naturalNum.reduce((a, b)=>{
    return (a * b);
}); 
console.log(fact);