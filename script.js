const userInput = document.getElementById("myInput");
const theUL = document.getElementById("ul1");

function addTask(){
    if (userInput.value === ""){
        alert("You must write something!");
    } 
    else{
        const task = document.createElement("li");
        const span = document.createElement("span");

        task.innerHTML = userInput.value;
        theUL.appendChild(task);
        span.innerHTML = '\u00d7';
        task.appendChild(span);
    }
    userInput.value = "";
};

theUL.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false);