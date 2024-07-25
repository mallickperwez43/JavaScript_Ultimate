// map, filter and reduce are higher order array methods 

let arr = [45, 23, 21];

// 1] Array map method 

// diff -> forEach vs map 
/*
const a = [1, 2, 4];

a.forEach((value, index, a) =>{
    function logic 
});

forEach -> return values after funcional operation for same array

const ar = [1, 2, 4];

arr.map((value, index, ar) =>{
    function logic
});
map -> creates a new array by performing some operation on each array elements
*/

let a = arr.map((value)=>{
    return value + 10;
});

console.log(a, arr);



// 2] Array filter method
// filter -> filters an array with values that passes the condition
/// creates a new array
let arr2 = [45, 23, 21, 0, 4, 5, 3, 8, 89, 7, 2];
let a2 = arr2.filter((value) =>{
    return value < 10;
});
console.log(a2, arr2);



// 3] Array reduce method
// reduce -> reduces an array to a single value
// creates a new array
let arr3 = [1, 3, 5, 6, 3, 2, 1];
const sumFunc = (h1, h2) => {
    return h1 + h2;
} 
let a3 = arr3.reduce(sumFunc);
console.log(a3, arr3);