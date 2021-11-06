const todoInput = document.querySelector(".todo-input");
const todoAddButton = document.querySelector(".todo-add-button");
const todoList = document.querySelector(".todo-list");
todoAddButton.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = "buy a bigger brain";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="far fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    todoList.appendChild(todoDiv);

}