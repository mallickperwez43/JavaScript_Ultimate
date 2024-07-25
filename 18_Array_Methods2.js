let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
console.log(num.length);

// 7] delete -> operator 
delete num[0];
console.log(num);
console.log(num.length); // length doesnt changes when you use the length
num.shift(); // shifting the empty item to actually get the changes in the length
console.log(num);
console.log(num.length);

// 8] concat() -> used to join arrays to the given array
// returns new array doesnt changes the existing array
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let newArray = num.concat(num_more);
console.log(newArray);
console.log(num);
console.log(num_more);

// 9] sort method 
// considers as string and sort alphabetically
let nums = [551, 22, 3, 14, 465, 869, 77, 67, 65];
nums.sort();  // [14, 22, 3, 465, 551, 65, 67, 77, 869]
console.log(nums); 
// sort based on the number and compare function
const compare = (a, b) =>{
    return a - b;
}
nums.sort(compare);
console.log(nums);

// 10] reverse() 
num.reverse();
console.log(num);

// 11] splice and slice
// splice -> add new items to an array
// syntax -> splice(positionToAdd, noOfElementsToRemove, elementsToAdd)
// return the array of the deleted elements
let arr = [23, 55, 34, 67, 96, 89, 56, 99, 23];
let deletedValues = arr.splice(2, 4, 4045, 3034, 2078);
console.log(arr); // [23, 55, 4045, 3034, 2078, 56, 99, 23]
console.log(deletedValues);  
console.log(typeof deletedValues);
// slice -> slice out a piece of an array
// syntax -> slice(index, optional(endIndex(excluded)))
// creates a new array
let newArr = [2, 45, 667, 73, 12, 89];
let sliced = newArr.slice(2, 4); // [667, 73]
console.log(sliced);
let anotherSliced = newArr.slice(3); // [73, 12, 89]
console.log(anotherSliced); 