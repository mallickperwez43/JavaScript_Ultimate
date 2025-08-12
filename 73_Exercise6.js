// Create a TODO List app capable of storing your TODOS in localStorage.
// Add an option to create, delete and access all the TODOS
// Try to create a good ui with responsiveness

window.onload = () => {
    loadTodos();

    const addTodoButton = document.getElementById("addTodoBtn");

    // event listener
    if (addTodoButton) {
        addTodoButton.addEventListener("click", addTodo);
    }
}

// function to add a todo
const addTodo = () => {
    const input = document.getElementById("todoInput");
    const task = input.value.trim(); // removes the leading and trailing whitespaces
    if (!task) {
        alert("Please enter a task!");
        return;
    }

    const todos = JSON.parse(localStorage.getItem("todos")) || []; // get the list or an empty storage if first entry
    todos.push(({ text: task, completed: false }));

    localStorage.setItem("todos", JSON.stringify(todos)); // set it in local storage
    input.value = "";

    loadTodos();
}

//function to delete a todo
const deleteTodo = (index) => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1); // deletes 1 element on the index

    localStorage.setItem("todos", JSON.stringify(todos)); // set the updated on in local storage

    loadTodos();
}

// function to toggle b/w complete and incomplete
const toggleTodo = (index) => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    if (todos[index]) {
        todos[index].completed = !todos[index].completed; // toggles the sign

        localStorage.setItem("todos", JSON.stringify(todos)); // set the updated on in local storage

        loadTodos();
    }
}

// function to load all the todos
const loadTodos = () => {
    const list = document.getElementById("todoList");
    list.innerHTML = ""; // empty the list contents

    // get the todos from local storage and iterate on them
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    if (todos.length === 0) {
        list.innerHTML = "<p style='text-align: center; color: #777'> No tasks yet! Add one please. </p>";
        return;
    }

    todos.forEach((todo, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "todo-item";
        if (todo.completed) {
            itemDiv.classList.add("completed");
        }

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = todo.completed;
        checkBox.className = "todo-checkbox";
        checkBox.onchange = () => toggleTodo(index);

        const todoText = document.createElement("div");
        todoText.className = "todo-text";
        todoText.textContent = todo.text;
        todoText.onclick = () => toggleTodo(index);

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "todo-actions";

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = (event) => {
            event.stopPropagation; // prevent toggling
            deleteTodo(index);
        };

        itemDiv.appendChild(checkBox);
        itemDiv.appendChild(todoText);
        itemDiv.appendChild(actionsDiv);
        actionsDiv.appendChild(deleteButton);
        list.appendChild(itemDiv);
    });
}