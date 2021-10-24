function addTask() {
  let todoList = document.querySelector(".to-do-list");
  let newTaskValue = document.getElementById("task");

  if (newTaskValue.value != "") {
    let newTask = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    newTask.textContent = newTaskValue.value;
    newTask.appendChild(deleteBtn);
    todoList.appendChild(newTask);
    newTaskValue.value = "";
  } else {
    alert('"If you plan to do nothing, you will get nothing done." -Confucious...probably');
  }
}

function removeTask() {

}


function filter(type) {
    if (type == "completed") {
      let completedTasks = document.querySelectorAll(".checked");
    }
}