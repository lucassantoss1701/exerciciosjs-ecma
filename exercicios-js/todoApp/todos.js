//Referenciando HTML

var listElement = document.querySelector('#app ul');
var btnElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');

var todos = [
    "Primeiro todo",
    "Segundo todo"
];

//Percorre o array e renderiza as strings
function renderTodos() {
    listElement.innerHTML = "";

    for (todo of todos) {
        var li = document.createElement('li');
        var textli = document.createTextNode(todo);

        //Pega posição de um todo com indexOf
        var pos = todos.indexOf(todo);

        //Cria elemento de exclusão e remove um todo na linha 25
        var linkElement = document.createElement('a');
        linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')');
        linkElement.setAttribute('href', "#");
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        li.appendChild(textli);
        li.appendChild(linkElement);
        listElement.appendChild(li);
    }
}

renderTodos();

//Adiciona um todo
function addTodo() {
    //Adiciona um item ao array através do push e renderiza novamente os todos
    todos.push(inputElement.value);

    inputElement.value = "";
    renderTodos();
}
btnElement.onclick = addTodo;

//Remove um todo
function removeTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}



