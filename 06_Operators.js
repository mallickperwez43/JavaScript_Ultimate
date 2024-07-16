console.log("Operators in JavaScript")

// Arithmetic Operators
let a = 10;
let b = 4;

console.log("a + b = ", a + b)   // addition
console.log("a - b = ", a - b)   // subtraction
console.log("a / b = ", a / b)   // division
console.log("a * b = ", a * b)   // multiplication
console.log("a ** b = ", a ** b)  // exponentiation
console.log("a % b = ", a % b)    // modulus
console.log("++a = ", ++a)    // pre increment
console.log("a++ = ", a++)    // post increment
console.log(a)
console.log("--b = ", --b)    // pre decrement
console.log("b-- = ", b--)    // post decrement
console.log(b)

// Assignment Operators
let assign = 9;
console.log(assign) // assignment
assign += 5 // same as assign = assign + 5
console.log("assign is now = ", assign)
assign -= 5 // same as assign = assign - 5
console.log("assign is now = ", assign)
assign *= 5 // same as assign = assign * 5
console.log("assign is now = ", assign)
assign /= 5 // same as assign = assign / 5
console.log("assign is now = ", assign)
assign %= 5 // same as assign = assign % 5
console.log("assign is now = ", assign)
assign **= 5 // same as assign = assign ** 5
console.log("assign is now = ", assign)

// Comparison Operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is :", comp1 == comp2) // value comparison
console.log("comp1 != comp2 is :", comp1 != comp2)
console.log("comp1 === comp2 is :", comp1 === comp2) // value and type comparison
console.log("comp1 !== comp2 is :", comp1 !== comp2)
console.log("comp1 > comp2 is :", comp1 > comp2)
console.log("comp1 < comp2 is :", comp1 < comp2)
console.log("comp1 >= comp2 is :", comp1 >= comp2)
console.log("comp1 <= comp2 is :", comp1 <= comp2)

// Logical Operators
let x = 5;
let y = 6;
let z =  true;
console.log(x < y && x == 5)
console.log(x == y || x == 5)
console.log(!z)

// typeof Operator
let s = BigInt(5);
console.log(typeof(s))

// BitWise Operators
let h = 4;
let i = 12;
console.log("h & i =", h & i)
console.log("h | i =", h | i)
console.log("h ^ i =", h ^ i)

// Comments

// This is a single line comment

/* This is a
MultiLine
comment */