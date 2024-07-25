let num = [3, 5, 1, 2, 4];

// regular for loop
for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}

console.log('\n');

// forEach loop
num.forEach((element) => {
    console.log(element * element);
})

console.log('\n');

// Array.from -> used to create an array from any other object
let name = "Harry";
console.log(typeof name);
let arr = Array.from(name);
console.log(arr);
console.log(typeof arr);

console.log('\n');

// for .... of 
for(let el of num){
    console.log(el);
}

console.log('\n');

// for .... in 
for(let key in num){
    console.log(num[key]);
}