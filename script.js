var task = document.getElementById("task").value;
let taskArray = [
  {
    completed: false,
    value: "Learn Javascript",
  },
  {
    completed: true,
    value: "Learn Python",
  },
];

// create a new task in array list
function addTask() {
  var task = document.getElementById("task").value;
  if (task == "") {
    alert("Please enter a task");
    return;
  }
  taskArray.push({ value: task, completed: false });
  document.getElementById("task").value = "";
  displayTask();
}
// display task in the list
function displayTask() {
  var taskList = document.getElementById("taskList");
  let toDOs = "";
  for (var i = 0; i < taskArray.length; i++) {
    toDOs += `<li class="task"id="task1">

        ${
          !isCompleted(taskArray[i].completed) ? (
            `<input type="checkbox" onchange="checkTask(${i})" />`
          ) : (
            `<div style="width:40px"></div>`
          )
        }
        <span class="${isCompleted(taskArray[i].completed)}">
        ${taskArray[i].value}
        </span>
        ${
          !isCompleted(taskArray[i].completed)
            ? `<button onclick="deleteTask(${i})" class="delete-task">
            <img class="delete-img" src="https://img.icons8.com/material-outlined/24/000000/filled-trash.png"/>
            </button>`
            : `<div style="width:40px"></div>`
        }
    </li>`;
  }
  taskList.innerHTML = toDOs;
}

function checkTask(index) {
  console.log(index);
}

function isCompleted(value) {
  if (value) {
    return "completed";
  } else {
    return "";
  }
}

// delete task from the list
function deleteTask(index) {
  // taskArray.splice(index, 1);
  displayTask();
}
displayTask();
