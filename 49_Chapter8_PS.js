// Q1 : Write a program to show different alerts when different buttons are clicked
// html page

// Q2 : Create a website which is capable of storing bookmarks of your favorite websites using href
// html page

// Q3 : Repeat Q2 using event listeners
document.getElementById("google").addEventListener('click', function(){
    window.location = "https://google.com";
});
document.getElementById("facebook").addEventListener('click', function(){
    window.location = "https://facebook.com";
});
document.getElementById("twitter").addEventListener('click', function(){
    window.location = "https://x.com";
});
document.getElementById("instagram").addEventListener('click', function(){
    window.location = "https://instagram.com";
});

// Q4 : Write a JS program to keep fetching contents of a website (Every 5 seconds)

const fetchContent = async (url) =>{
    let con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function(){
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000)

// Q5 : Create a glowing bulb effect using classList toggle method in JS
setInterval(async function () {
    document.querySelector("#bulb").classList.toggle("bulb")
}, 300)