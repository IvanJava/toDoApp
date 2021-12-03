//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listners
todoButton.addEventListener('click', addTodo);

//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class ="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);
    // append tododiv to todolist
    todoList.appendChild(todoDiv);
}

//original copy