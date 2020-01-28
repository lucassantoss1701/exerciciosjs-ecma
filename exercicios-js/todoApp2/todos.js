var listELement = document.querySelector('#app ul');
var btnElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');

var todos = JSON.parse(localStorage.getItem('todos_list')) || [];

function renderTodos() {
    listELement.innerHTML = "";

    for (todo of todos) {
        var li = document.createElement('li');
        var liText = document.createTextNode(todo);

        var pos = todos.indexOf(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')');

        li.appendChild(liText);
        li.appendChild(linkElement);
        listELement.appendChild(li);
    }
}

renderTodos();

function addTodo() {
    if (inputElement.value !== "") {
        todos.push(`${inputElement.value} `);
        inputElement.value = "";
        renderTodos();
        saveToStorage()
    } else {
        alert('Digite algo para adicionar!')
    }

}
btnElement.onclick = addTodo;

function removeTodo(pos) {
    todos.splice(pos, 1);

    renderTodos();
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('todos_list', JSON.stringify(todos));
}