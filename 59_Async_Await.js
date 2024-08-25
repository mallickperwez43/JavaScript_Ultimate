// An async function always returns a promise and wraps non promise in it
async function harry() {  // returns a promise
    let dehliWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        }, 2000)
    })     

    let bangloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        }, 5000)
    })             
    
    // dehliWeather.then(alert)
    // bangloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait....")
    let dehliW = await dehliWeather
    console.log("Fetched Delhi Weather: " + dehliW)

    console.log("Fetching Banglore Weather Please wait....")
    let bangloreW = await bangloreWeather
    console.log("Fetched Banglore Weather: " + bangloreW)

    return [dehliW, bangloreW]
}

const cherry = async() =>{
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async() =>{
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()
}

main1()