// ------------------------
// Projet 4 - Todo List
// ------------------------

// Variables

const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector ("#task-container");
const inputTask = document.querySelector("#input-task");



// Event Listener pour le bouton + (ajouter une tâche)

addTask.addEventListener("click", () =>{ 

    let task = document.createElement("div"); // Je crée une div 
    task.classList.add("task");  // J'ajoute une classe "task" à ma div

    let li = document.createElement("li"); // Je crée une balise li
    li.innerText = `${inputTask.value}`; // Je récupère la valeur de l'input

    task.appendChild(li); // Cela rajouter une balise li au sein de ma div

    let checkBtn =  document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('check-task');

    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteBtn.classList.add("delete-task");
    task.appendChild(deleteBtn);

    if(inputTask.value === ""){
        alert("Veuillez rentrer une tâche")
    } else {
        
        taskContainer.appendChild(task);
    }



    inputTask.value = ""; // Permet de libérer le champ une fois la tâche ajoutée

    checkBtn.addEventListener("click", () =>{

    //  checkBtn.previousSibling.classList.toggle("toggle-task");
    //  li.style.textDecoration = "line-through";
        li.classList.toggle("toggle-task");
       
    } )

    deleteBtn.addEventListener("click", () =>{
        
        deleteBtn.parentElement.remove();
        

    })


})

