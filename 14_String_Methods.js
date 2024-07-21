const prompt = require("prompt-sync")();

// string properties and methods 
let name = "Harry";   

// 1] length -> to get the length of the string // property  
console.log(name.length);   
// 2] convert to uppercase  // function / method 
console.log(name.toUpperCase())  
// 3] convert to lowercase  // function / method   
console.log(name.toLowerCase())
// 4] substring method (2 parameter) 
console.log(name.slice(2, 4));   // prints substring from 2 to 4 excluding 4
// 5] substring method (parameter to end)
console.log(name.slice(2));       // prints subtring from 2 to end
// 6] replace the string literal with something else
console.log(name.replace("Har", "Per"));

let friend = "Naman";
// 7] concatination of string // even use + operator
let name1 = name.concat(" is a friend of ", friend);   
// let name1 = name + friend;
console.log(name1);
// 8] trim -> remove whitespaces
let name2 = "         Harry    ";
console.log(name2.trim());
console.log(name2.length);
let name3 = name2.trim();
console.log(name3.length);

// Strings are immutable cannot be changed as a of the methods 

// QuickQuiz : use a for loop to print a string 

let s = prompt("Enter the string : ");
let st = "";
// way 1
// for(let i = 0; i < s.length; i++){
//     st += s[i];
// }
// console.log(st);

// way 2
// for(let ch of s){
//     st += ch;
// }
// console.log(st);

// way3
for(let index in s){
    st += s[index];
}
console.log(st);