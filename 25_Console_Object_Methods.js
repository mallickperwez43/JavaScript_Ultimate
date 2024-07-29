console.log(console); // -> console object

console.log("Hi Harry"); // to print something

console.error("Hey this is an error"); // -> to show error

console.assert(5 > 53); // -> to arrest a condition
console.assert(533 > 54);
console.assert;

console.clear(); // -> clears the console

let obj = {a : 1, b : 2, c : 3, d : 4};
console.table(obj); // -> shows tabular form of key value 

console.warn("Hey please dont drink soda"); // to show warnings

console.time("a"); // start time
console.timeEnd("a"); // end time

console.time("forLoop");
for(let i = 0; i < 5; i++){
    console.log(233);
}
console.timeEnd("forLoop");

console.time("whileLoop");
let i = 0;
while(i < 5){
    console.log(233);
    i++;
}
console.timeEnd("whileLoop");