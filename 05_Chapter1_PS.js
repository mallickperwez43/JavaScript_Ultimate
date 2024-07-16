// Chapter 1
// Q1 : Create a variable of type string and try to add a number to it
let a = "Harry"
let b = 6 
console.log(a + b) // concatination

// Q2 : Use typeof to find the datatype of the above ans
console.log(typeof(a + b))  // string

// Q3 : Create a const object in JS , can you change it to hold a number later?
const d = {
    name : "Harry" , 
    section : 1 ,
    isPrinciple : false
}
console.log(d.isPrinciple)

// d = 54 // -> cannot change a const object

// Q4 : Try to add a new key to the const object in problem 3 , can you do it?
d['friend'] = "Subham"   // can add a new key 
console.log(d)
   // -> const object d stores the referance of that key so it can be changed or updated and also a new can be added

d['name'] = "Lovish"
console.log(d)

// Q5 : Write a JS program to create a word-meaning dictionary of 5 words
const dict = {
    appreciate : "recognize the full worth of" ,
    yakka : "work, especially hard work" ,
    ataraxia : "a state of freedom from emotional disturbance and anxiety" ,
    selenophile : "a person who loves the moon" , 
    judgement : "an opinion formed after carefully considering the information you have"
}

console.log(dict)