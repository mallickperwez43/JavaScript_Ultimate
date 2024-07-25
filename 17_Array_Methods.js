const prompt = require("prompt-sync")();

// Array Methods
let num = [1, 2, 3, 34, 64];
console.log(num);
console.log(typeof num);

// 1] toString() -> array to string conversion (toString())
let a = num.toString();
console.log(a);
console.log(typeof a);

// 2] join() -> join elements of array with a seperation 
let b = num.join(' ');
console.log(b);
console.log(typeof b);

// 3] pop() -> remove last element from the array
let popped = num.pop();
console.log(num);
console.log("The popped element :", popped);

// 4] push() -> add new element at the end of the array
console.log("The old length is", num.length);
let newLength = num.push(56);
console.log(num);
console.log("The new length is", newLength);

// 5] shift() -> removes element from the beginning and returns it
let shiftedEL = num.shift();
console.log(shiftedEL);
console.log(num);

// 6] unshift() -> adds element to the beginning returns new array length
let unshiftedElLen = num.unshift(8); // new lenght
console.log(unshiftedElLen);
console.log(num);