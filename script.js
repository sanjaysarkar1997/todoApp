var task = document.getElementById("task").value;

let taskArray = ["Ankita", "Amit", "Amita"];

// create a new task in array list
function addTask() {
  var task = document.getElementById("task").value;
  if (task == "") {
    alert("Please enter a task");
    return;
  }
  taskArray.push(task);
  document.getElementById("task").value = "";
  displayTask();
}

// display task in the list
function displayTask() {
  var taskList = document.getElementById("taskList");
  let toDOs = "";
  for (var i = 0; i < taskArray.length; i++) {
    toDOs += `<li class="task">
        ${taskArray[i]}<button class="delete-task" onclick="deleteTask(${i})">
        <img class="delete-img" src="https://img.icons8.com/material-outlined/24/000000/filled-trash.png"/>
        </button>
    </li>`;
  }
  taskList.innerHTML = toDOs;
}

// delete task from the list
function deleteTask(index) {
  taskArray.splice(index, 1);
  displayTask();
}

displayTask();
