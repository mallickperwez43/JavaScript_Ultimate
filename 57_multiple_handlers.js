let p1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        // alert("Hey I am not resolved")
        resolve(1)
    }, 2000)
})

// multiple handlers
p1.then(()=>{
    console.log("Hurray")
})
p1.then(()=>{
    console.log("Congratulations this promise is now resolved")
})

// promise chaining 
p1.then(()=>{
    console.log("Trying to chain promise")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4)
        }, 6000)
    })
}).then((value)=>{
    console.log(value)
})
