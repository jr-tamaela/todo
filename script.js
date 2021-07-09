// Selecting all html elements in variables
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoItemsList = document.querySelector(".todo-items");

let todos = [];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo(todoInput.value);
});

// add task to Array and clear input field
function addTodo(item) {
    if(item != '') {
        const todo = {
            id: Date.now(),
            name: item,
            completed: false,
        };

        todos.push(todo);
        renderTodos(todos);
        //console.log(todos);

        todoInput.value = '';
    }
}


//Print tasks on page
function renderTodos(todos) {
    todoItemsList.innerHTML = '';

    todos.forEach(function(item) {
        const checked = item.completed ? 'checked' : null;

        const li = document.createElement("li");
        li.setAttribute("class", "item");
        li.setAttribute("data-key", item.id);
        if(item.completed == true) {
            li.classList.add('checked');
        }
        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${checked}>
            ${item.name}
            <button class="delete-button">X</button>
        `;
        todoItemsList.append(li);
    });
};