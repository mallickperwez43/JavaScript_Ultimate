document.write("Hello"); 

// let a = setTimeout(function(){
//     alert("I am inside of setTimeout")
// }, 5000);

// let b = prompt("Do you want to run setTimeout?")
// if(b == "no"){
//     clearTimeout(a)
// }
// console.log(a)

const sum = (a, b, c) => {
    console.log("Yes I am running " + (a + b + c))
    return a + b + c
}

// setTimeout(sum, 1000, 1, 2, 7)
// clearTimeout(sum) // stops the timer

// setInterval(function(){
//     alert("setInterval is running")
// }, 3000);

let count = 0;
let time = setInterval(() => {
    sum(1, 2, 7);
    count++;

    if(count == 10){
        clearInterval(time);
    }    
}, 3000)