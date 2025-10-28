
const todoList = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Finish Week 4 assignment", completed: true },
];

let nextId = 3;

// Function to display all tasks
function displayTasks() {
  if (todoList.length === 0) {
    console.log("no task to show");
    return;
  }

  for (let todo of todoList) {
    let status;
    if (todo.completed === true) {
      status = "[x]";
    } else {
      status = "[ ]";
    }
    console.log(
      `${status} ${todo.task} - completed: ${todo.completed} Id:(${todo.id})`
    );
  }
}

// function to create a new task object
function createTask(task) {
  return { id: nextId++, task: task, completed: false };
}

// Function to add a new task
function addTask(task) {
  const newTask = createTask(task);
  todoList.push(newTask);
  console.log(`Added task: "${task}" with ID: ${newTask.id}`);
}

// Function to mark a task as complete
function markTaskComplete(taskId) {
  for (let i = 0; i < todoList.length; i++) {
    if (taskId === todoList[i].id) {
      todoList[i].completed = true;
      console.log(`task with id:${taskId} marked as complete`);
      return;
    }
  }
  console.log(`task with id:${taskId} not found`);
}

//BONUS: Function to delete a task

function deleteTask(taskId) {
  const index = todoList.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    todoList.splice(index, 1);
    console.log(`task with id:${taskId} deleted`);
  } else {
    console.log(`task with id:${taskId} not found`);
  }
}


// Simulation of Operations
console.log("--- Initial To-Do List ---");
displayTasks();

console.log("\n--- Adding a New Task ---");
addTask("Clean my room");
displayTasks();

console.log("\n--- Marking Task #1 as Complete ---");
markTaskComplete(1);
markTaskComplete(4);
displayTasks();

console.log("\n--- Deleting Task #2 ---");
deleteTask(2);
displayTasks();


console.log("\n--- Adding Another Task ---");
addTask("Read JavaScript notes");
displayTasks();
