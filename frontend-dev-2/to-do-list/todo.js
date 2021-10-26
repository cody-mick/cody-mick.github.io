const todoList = document.querySelector(".to-do-list");
let toDos = Array.from(todoList.children);
console.log(toDos);

function addTask(todoList) {
  let newTaskValue = document.getElementById("task");

  if (newTaskValue.value != "") {
    let newTask = document.createElement("li");

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.setAttribute("onclick", "removeTask(todoList)");
    deleteBtn.textContent = "X";

    let checkBtn = document.createElement("button");
    checkBtn.setAttribute("class", "complete");
    checkBtn.setAttribute("onclick", "completeTask(todoList)");
    checkBtn.textContent = "\u2713";

    newTask.textContent = newTaskValue.value;
    newTask.appendChild(deleteBtn);
    newTask.appendChild(checkBtn);
    todoList.appendChild(newTask);
    newTaskValue.value = "";
  } else {
    alert(
      '"If you plan to do nothing, you will get nothing done." -Confucious...probably'
    );
  }
}

function removeTask(todoList) {

}

function filter(type) {
  if (type == "completed") {
    let completedTasks = document.querySelectorAll(".checked");
  }
}

export default class Tasks {
  constructor(elementId) {
    
  }
}