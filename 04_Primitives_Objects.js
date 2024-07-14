/* There are 7 Primitives data types in JS
primitives -> fundamental or Built in data types 
NNSSBBU -> technique to remember
N : null
N : number
S : symbol
S : string
B : boolean
B : big int
U : undefined
*/

// Primitive data types nn ss bb u 
let a = null;
let b = 345;
let c = "Harry";
let d = Symbol("Nice");
let e = true; // can be false also
let f = BigInt("567") + BigInt("3");
let g = undefined;
console.log(a, b, c, d, e, f, g)

// to get info of the data type
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

/* Objects -> key value pairs, non premitive data type

let person = {
    name : "John" , 
    age : 29
}; 
console.log(person.name)
console.log(person.age)

person is the object
name and age are the keys 
John and 29 are values
*/

// object creation
const item = {
    "Rice" : 47,
    "Sugar" : 50,
    "Pulses" : 60,
    "Salt" : null
};

console.log(item["Pulses"]) 
console.log(item.Salt)