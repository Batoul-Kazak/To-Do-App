const input = document.querySelector("#new-task-container input"),
 addButton = document.querySelector("#new-task-container button"),
 tasksListContainer = document.querySelector("#tasks-list-container"),
 notification = document.querySelector("p");

let tasksNumber = 0;

addButton.addEventListener("click", _e => {
    if(input.value === '') alert("There is no task to add!");
    else addNewTask();
});

function addNewTask() {
    if(tasksNumber == 15) 
    {
        notification.classList.remove("hidden");
        return;    
    }
    console.log(tasksNumber)
    let li = document.createElement("li");
    li.innerHTML = input.value;
    tasksListContainer.appendChild(li);

    let deleteTaskButton = document.createElement("span");
    deleteTaskButton.innerHTML = "×";
    deleteTaskButton.classList.add("delete-task-button");
    li.appendChild(deleteTaskButton);
    tasksNumber++;
    saveDate();
}

// let deleteTaskButtons = document.querySelectorAll("li span");
// deleteTaskButtons.forEach(button => {
//     button.addEventListener("click", _e => {
       
//     });
// });

tasksListContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") 
    {
            e.target.classList.toggle("checked");
            saveDate();
    }
    else 
        if(e.target.tagName === "SPAN")
        {
                e.target.parentElement.remove();
                tasksNumber--;
                console.log(tasksNumber);
                notification.classList.add("hidden");
                saveDate();
        }
}, false);

//after calling these two functions data will be saved in the browser so if we add
//new task then closed the browser, when we open it again the task will appear
function saveDate() {
    localStorage.setItem("data", tasksListContainer.innerHTML)
}

function showTask() {
    tasksListContainer.innerHTML = localStorage.getItem("data")
}
showTask();