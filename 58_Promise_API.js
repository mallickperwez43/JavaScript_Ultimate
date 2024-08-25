// PROMISE API 
// 6 static methods
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 1")
    }, 1000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 2")
        // reject(new Error("Error"))
    }, 2000);
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 3")
    }, 3000);
});

// p1, p2, p3 => will asynchornously work together

/*
Traditional way
// p1.then((value)=>{
//     console.log(value)
// })
    
// p2.then((value)=>{
//     console.log(value)
// })
        
// p3.then((value)=>{
//     console.log(value)
// })
*/

// Method 1
// I want when p1, p2, p3 => resolves , I want to see something on the console when all the promise has been resolved
// let promise_all = Promise.all([p1, p2, p3]) // time -> max of all time  
// promise_all.then((value)=>{
//     console.log(value)
// })

// Method 2
// When any promise is rejected still we want to see the status of all when it done
// let promise_all = Promise.allSettled([p1, p2, p3]) // time -> max of all time  
// promise_all.then((value)=>{
//     console.log(value)
// })

// Method 3
// Among all the promises the which get fulfilled first is displayed
// let promise_all = Promise.race([p1, p2, p3]) // returns promise which gets fulfilled first(resolved/ rejected)  
// promise_all.then((value)=>{
//     console.log(value)
// })

// Method 4
// Among all the promises the which get resolved first is displayed
// let promise_all = Promise.any([p1, p2, p3]) // returns promise which gets fulfilled first(resolved)  
// promise_all.then((value)=>{
//     console.log(value)
// })

// Method 5
// Makes a resolved promise with the given value
// let promise_all = Promise.resolve(6)   
// promise_all.then((value)=>{
//     console.log(value)
// })

// Method 6
// Makes a rejected promise with the given value
let promise_all = Promise.reject(new Error("I am error")) 
promise_all.then((value)=>{
    console.log(value)
})