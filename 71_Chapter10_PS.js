// Q1 : Use a free API from the internet & feed your app with live data
let url = "https://jsonplaceholder.typicode.com/posts"
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
        console.log(contests[item]);
        ihtml += `
            <div class="card" style="width: 22rem; justify-content: center;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].title}</h5>
                    <p class="card-text">ID : ${contests[item].id}</p>
                    <p class="card-text">Body : ${contests[item].body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    }
    cardContainer.innerHTML = ihtml;
})
// Q2 : Create a Note Saving App which stores your note to LocalStorage

let a = prompt("Enter your note");
if (a) {
    localStorage.setItem("note", a);
}

// Q3 : Repeat the last question & fetch the note which was saved
let n = localStorage.getItem("note");
alert("Your note is " + n);

// Q4 : Delete the note in the previous question
let c = confirm("Do you want to delete your note");
if (c) {
    localStorage.removeItem("note");
}