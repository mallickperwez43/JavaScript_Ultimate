let promise = new Promise(function(resolve, reject){
    console.log("Hello")
    resolve(56)
})

console.log("Hello One")
setTimeout(function(){
    console.log("Hello Two in 2 seconds")
}, 2000)
console.log("My name is " + "Hello Three")
console.log(promise)

// promsie object returned by the new Promise constructor has a 'State' and 'Result'

// Basic example
// 1] Fetch google.com homepage ==> console.log("google.com homepage done")
// 2] Fetch data from the data api
// 3] Fetch pictures from the server
// 4] Print downloading
// 5] Rest of the script 

// 1, 2, 3 can be done parallely so use promise ==> parallel execution