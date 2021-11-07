
var items = [];
const todoInput = document.querySelector(".todo-input");
const todoAddButton = document.querySelector(".todo-add-button");
const todoRemoveButton = document.querySelector(".todo-minus-button");
const todoList = document.querySelector(".todo-list");

todoAddButton.addEventListener("click", addTodo);
todoRemoveButton.addEventListener("click", toRemove);
todoList.addEventListener("click", checkTodo);

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

function toRemove(event) {
    event.preventDefault();
    
    todoList.addEventListener("click", removeTodo);
    
}
    
function removeTodo(event) {
    const item = event.target;
    
    if (item.classList[0] === "todo-item") {
        const todo = item.parentElement;
        todo.classList.add("slide-out");
        todo.addEventListener("transitionend", function(){
            todo.remove();
            
            const index = items.indexOf(item.textContent);
            if (index > -1) {
                items.splice(index, 1);
            }
        });

        todoList.removeEventListener("click", removeTodo);
    }

    
    
}

function checkTodo(event) {
    const item = event.target;

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("check");
    }
}