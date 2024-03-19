const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(toDoItem) {
    const list = document.createElement("li");
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const toDoItem = toDoInput.value;
    toDoInput.value = "";
    paintToDo(toDoItem);
}

toDoForm.addEventListener("submit", handleToDoSubmit);