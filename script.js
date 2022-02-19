function addTask() {
  var task = document.getElementById("task").value;
  if (task == "") {
    alert("Please enter a task");
    return;
  }
  var taskList = document.getElementById("taskList");
  var li = document.createElement("li");
  li.innerHTML = task;
  taskList.appendChild(li);
  document.getElementById("task").value = "";
  li.onclick = function () {
    taskList.removeChild(li);
  };
}
