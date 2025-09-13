let tasks = [
  { name: "Study", completed: false, id: 1 },
  { name: "Clean my room", completed: false, id: 2 },
  { name: "Volunteer", completed: false, id: 3 },
  { name: "Eat healthy", completed: false, id: 4 },
  { name: "Go to mosque", completed: false, id: 5 },
  { name: "Wash my hair", completed: false, id: 6 },
  { name: "Apply Face mask", completed: false, id: 7 },
  { name: "Recite my daily Azkar", completed: false, id: 8 },
  { name: "Meet my friends", completed: false, id: 9 }
];

let list = document.getElementById("taskList");

function showTasks() {
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let li = document.createElement("li");
    let check = document.createElement("input");
    check.type = "checkbox";
    check.checked = task.completed;
    check.addEventListener("change", function() {
      task.completed = check.checked;
    });
    li.appendChild(check);
    li.appendChild(document.createTextNode(" " + task.name));
    list.appendChild(li);
  }
}

showTasks();

let doneBtn = document.getElementById("doneBtn");
doneBtn.addEventListener("click", function() {
  let doneTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      doneTasks.push(tasks[i].name);
    }
  }
  alert("Completed tasks: " + doneTasks.join(", "));
});

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function() {
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].completed = false;
  }
  showTasks();
});