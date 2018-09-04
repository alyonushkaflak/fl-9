// var rootNode = document.getElementById("root");
// rootNode.appendChild( /* Append your list item node*/ );

function addItem(){
    const ul = document.getElementById ("list");
    const item = document.getElementById ("item");
    const li = document.createElement("li");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
}

function deleteButton(){
    const ul = document.getElementById("list");
    const item = document.getElementById ("item");
    const buttonDelete = document.createElement("button");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(buttonDelete);
}

function stoppedTyping(){
    if(item.value.length > 0) { 
        document.getElementById('button').disabled = false; 
    } else { 
        document.getElementById('button').disabled = true;
    }
}

