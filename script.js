// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
      span.parentElement.classList.toggle("completed");
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }
});

// Pressing Enter to Add Task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});
