const loadScript = (src)=>{
    return new Promise((resolve, reject) =>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded sir")
        }
        script.onerror = () =>{
            reject(0)
        }
    })
}

// error
let p1 = loadScript("http://localhost:3000/index.js")
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("We are sorry but we are having problem in loading this script")
})

// loaded
let p2 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
p2.then((value)=>{
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("Second script ready")
}).catch((error)=>{
    console.log("We are sorry but we are having problem in loading this script")
})