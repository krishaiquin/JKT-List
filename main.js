
var items = [];
const todoInput = document.querySelector(".todo-input");
const todoAddButton = document.querySelector(".todo-add-button");
const todoList = document.querySelector(".todo-list");
todoAddButton.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();

    if (!items.includes(todoInput.value)) {
        items.push(todoInput.value);
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="far fa-check-square"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        todoList.appendChild(todoDiv);
        todoInput.value = "";
    } else {
        //might change this
        window.alert(todoInput.value + " already exists!");
    }
    
}