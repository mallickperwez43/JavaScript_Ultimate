
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    localStorage.setItem("todo", JSON.stringify([title, desc]));
    console.log(e);
    todo.innerHTML = `
        <h1>${title}</h1>
        <h3>${desc}</h3>
    `
});

const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("todo");
    todo.innerHTML = "";
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
});