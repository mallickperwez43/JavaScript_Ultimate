// Scopes

// JavaScript has 3 types of scopes
// Block scope
// Function scope
// Global scope

// let & const -> block level scope ie if a variable defined inside a {} cannot be accesed from outside the block

// Global scope
let p = 9;

// Block scope
{
    let a = 27
    console.log(a); // Accessable here -> block scope
    console.log(p); // Accessable here -> gobal scope
    console.log(1);
}
// console.log(a); // Error -> not in the block scope

// Function scope
// Variables declared within a function , becomes local to the function
function f() {
    let b = 18;
    console.log(b); // Accessable here -> function scope
    console.log(p); // Accessable here -> gobal scope
    console.log(2);
}
f();
// console.log(b); // Error -> not in the function scope

console.log(p); // Accessable here -> gobal scope