const addForm = document.querySelector('.add');
const todosList = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    todosList.innerHTML += html;
}

const filterTodos = (value) => {
    Array.from(todosList.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(value))
        .forEach(todo => todo.style.setProperty('display', 'none','important'));

    Array.from(todosList.children)
        .filter(todo => todo.textContent.toLowerCase().includes(value))
        .forEach(todo => todo.style.removeProperty('display'));
}

addForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo !== ""){
        generateTemplate(todo);
        addForm.reset();
    }
})

todosList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

search.addEventListener('keyup', (e) => {
    const value = search.value.trim();
    filterTodos(value.toLowerCase());
})