// Q1 : Write a program to load a JS file in a browser using Promises
// Use .then() to display an alert when the load is complete


// const laodScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve("Successfully loaded : " + src)
//         }
//         document.head.append(script)
//     })
// }

// let a = laodScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// a.then((value) => {
//     console.log(value)
// })

// Q2 : Write the same program from previous question and use async/await syntax

// const main1 = async () => {
//     console.log(new Date().getMilliseconds());
//     let a = await laodScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds());
// }

// main1()

// Q3 : Create a promise which rejects after 3 secs
// Use an async/await to get its value. Use a try catch to handle its error

// let p = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Please this is not acceptable"))
//         }, 3000)
//     })
// }

// let b = async () => {
//     try {
//         let c = await p();
//         console.log(c)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// b()

// Q4 : Write a program using Promise.all() inside an aysnc await to await 3 promises.
// Compare its results with the case where we await these promise one by one.

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000)
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000)
    })
}

const run = async () => {
    // console.time("run")
    // let a1 = await p1() // Fetch first 10 products from the database
    // let a2 = await p2() // Fetch another 10 products from the database
    // let a3 = await p3() // Fetch yet another 10 products from the database
    // console.log(a1, a2, a3)
    // console.timeEnd("run")

    console.time("run")
    let a1 = p1() // Fetch first 10 products from the database
    let a2 = p2() // Fetch another 10 products from the database
    let a3 = p3() // Fetch yet another 10 products from the database

    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    console.timeEnd("run")
}

run()