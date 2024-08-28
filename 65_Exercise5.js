/*
    Write a JS Program to pretend to look like a hacker
    Write an async function which will simply display the following output:
    Intializing Hack Program....
    Hacking Ashish username....
    Username found ashish17....
    Connecting to facebook....

    Try to use HTML and Styling if possible
*/

let events = [
    "Intializing Hack Program....",
    "Hacking your device....",
    "All social media username found....",
    "Connecting to facebook....",
    "Connecting to instagram....",
    "Connecting to whatsapp....",
    "Connecting to twitter...."
];

async function startProcess(resolve) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000)
    })
}

async function visibility() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000)
    })
}

async function updateEvents() {
    await visibility()
    document.getElementById("main").style.visibility = "visible";

    for (let i = 0; i < 7; i++) {
        let doc = document.getElementById("p-" + i);
        await startProcess();
        doc.innerHTML = events[i];
    }
}

updateEvents()