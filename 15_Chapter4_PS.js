const prompt = require("prompt-sync")();

// Q1 : What will the the following line print in JS
let str = "har\"";
console.log(str.length);  // 4

// Q2 : Explore the includes, startsWith & endsWith functions of a string
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`); 
console.log(sentence.includes(word));

console.log(sentence.startsWith("The"));  // without position 
console.log(sentence.startsWith("quick", 4));  // with position

console.log(sentence.endsWith("dog."));
console.log(sentence.endsWith("dog", 43));

// Q3 : Write a program to convert a given string to lowercase
let s = "HARISH";
console.log(s.toLowerCase());

// Q4 : Extract the amount out of this string
// "Please give Rs 1000"
let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);

// Q5 : Try to change 4th character of a given string. Were you able to do it?
let friend = "Deepika";
friend[3] = "R";   // wont change but wont even show error
console.log(friend); // friend is not changed because string is immutable