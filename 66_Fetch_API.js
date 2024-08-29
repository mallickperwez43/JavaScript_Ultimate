let p = fetch("https://catfact.ninja/fact");

p.then((response) => {
    return response.json();
}).then((value) => {
    console.log(value)
})