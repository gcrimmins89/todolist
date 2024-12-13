const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask(){
    if(inputBox === '') {
        alert('You must add an item')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        
    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()    
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

function askName() {
    const userName = prompt("What is your name?");
    if (userName) {
        const heading = document.getElementById('todo-heading');
        heading.innerHTML = `${userName}'s To-Do List`; // Update the heading
    } else {
        alert("You didn't provide a name.");
    }
}
askName();
