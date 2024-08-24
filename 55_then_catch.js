let p1 = new Promise((resolve, reject) =>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am resolved")
        resolve(true);  // resolve(value) -> resolved with the value
    }, 5000)
})

let p2 = new Promise((resolve, reject) =>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am rejected")
        reject(new Error("I am an error"))  // rejected(error) -> rejected with an error
    }, 5000)
})

// To get the value
p1.then((value)=>{
    console.log(value)
})

// To catch the errors
p2.catch((error)=>{
    console.log("some error occured in p2")
})

// state and result 
// state -> pending -> fulfilled -> (resolved, rejected)
// result -> undefined -> value -> (resolve, reject)

// How to know the state and result of a promise?
// consumers : then & catch // then -> handling value // catch -> handling error

/*
// example
let promise = new Promise(resolve => {
    setTimeout(()=> resolve("done"), 1000)
})

promise.then(alert)  

// flow explained
// promise state -> pending , result  -> undefined
// after 1 sec -> promise state -> fulfilled(resolved), result -> done
*/

// using .then to handle/catch error
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})


// QUIZ

function loadScript(src){
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.src = src;
        script.onload = function(){
            console.log("Loaded script with SRC: " + src);
            resolve(src);
        } 
        script.onerror = function(){
            console.log("Error loading script with SRC: " + src);
            reject(new Error("Src got some error"));
        }
        document.body.appendChild(script);
    })
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")  
.then((src)=>{
    console.log("Script loaded successfully : " + src);
})
.catch((error)=>{
    console.log(error)
})