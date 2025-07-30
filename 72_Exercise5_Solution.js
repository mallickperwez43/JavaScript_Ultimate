let events = [
    "Initializing Hack tool",
    "Connecting to Facebook",
    "Connecting to server 1",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username iamharry",
    "Trying Brute Force",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match found",
    "Accessing account",
    "Hack Successful"
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000);
    });
}

const showHack = async (message) => {
    await sleep(2);
    // console.log(message);
    text.innerHTML = text.innerHTML + message + "<br>";
}

// IIFE (Immediately Invoked Function Expression)
// A function that executes immidiately adter it is defined

// (function() {
//     // Code to be executed immediately
//     let message = "Hello from IIFE!";
//     console.log(message);
// })();

(async () => {
    for (let i = 0; i < events.length; i++) {
        await showHack(events[i]);
    }
})();