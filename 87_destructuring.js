// Destructuring

// Destructuring assignment is used to unpack values from an array, or properties from objects, into distinct variables 

let arr = [3, 5, 8, 9, 12, 14];

// Traditonal way 
// let a = arr[0];
// let b = arr[1];

let [a, b, c, d, ...rest] = arr; // destructuring
console.log(a, b, c, d, rest);

// manlo ki rest mein 9 se shuru ho
let [e, , f, ...rest1] = arr;
console.log(e, f, rest1);

// objects
let { o1, o2 } = { o1: 23, o2: 32 }
console.log(o1, o2);

// objects -> using alias
let { a: ob1, b: ob2 } = { a: 1, b: 2 };
console.log(ob1, ob2);

// Spread operator
// It allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected
// In an object literal, the spread syntax enumerates the properties of an object and adds the key value pairs to the object being created

let arr1 = [3, 5, 8];
const obj1 = { ...arr1 };
console.log(obj1);

function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}

console.log(sum(...arr1));

let obj2 = {
    name: "Harry",
    company: "Company xyz",
    address: "XYZ"
}

console.log({ ...obj2, name: "John" });
console.log({ ...obj2, name: "John", company: "ABC" });
console.log({ ...obj2, name: "John", company: "ABC", designation: "Employee" }); // added a property too    
console.log({ name: "John", company: "ABC", ...obj2 }); // This will print the object obj2 without overriding
console.log({ obj2 }); 