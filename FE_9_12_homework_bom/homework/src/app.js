const rootNode = document.getElementById('root');

const todoItems = [{
    isDone: false,
    id: 12345,
    description: 'Todo 1'
}];

// Your code goes here

function create(element) {

    let container = document.createElement('div');
    rootNode.appendChild(container);

    let header = document.createElement('header');
    header.innerHTML = '<h2>Simple TODO list</h2>';
    container.appendChild(header);

    let button = document.createElement('button');
    let t = document.createTextNode('Add new task');
    button.appendChild(t);
    container.appendChild(button);
}