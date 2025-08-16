// IIFE : Immediately Invoked Function Expression
// An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is executed immediately after it is defined.
// It's a way to create a self-contained scope, preventing variables from polluting the global scope.
// IIFEs are typically defined using a function expression enclosed in parentheses, followed by another set of parentheses to invoke it immediately.

// ( function () {

// })()

let a = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, 4000);
    });
}

// Case 1 : traditional way -> function banao aur function call karo

// let f = async () => {
//     let b = await a(32);
//     console.log(b);
//     let c = await a(24525);
//     console.log(c);
//     let d = await a(14155);
//     console.log(d);
// }

// f();

// Case 2 : iife -> function ko iife mein wrap karke instant call kardo
(async () => {
    let b = await a(32);
    console.log(b);
    let c = await a(24525);
    console.log(c);
    let d = await a(14155);
    console.log(d);
})();