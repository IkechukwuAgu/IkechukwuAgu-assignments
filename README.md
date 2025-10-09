# 🌍 Universal Translator (First-Assignment)

## 🎯 Objective

This assignment helps you understand **conditional logic** in JavaScript — using `if`, `else if`, and `else` statements to produce different outputs based on an input value.

---

## 🧩 Description

The program displays a greeting message in different languages depending on the value of a variable called `languageCode`.

You can change the value of `languageCode` to see how the output changes.

---

## 💻 Setup

1. Create a file named **`translator.js`**.
2. Copy the following setup code into the file:

```js
const languageCode = 'es';
let greeting;
```

```js
if (languageCode === 'es') {
  greeting = 'Hola, Mundo';
} else if (languageCode === 'fr') {
  greeting = 'Bonjour, le monde';
} else if (languageCode === 'de') {
  greeting = 'Hallo, Welt';
} else {
  greeting = 'Hello, World';
}

```

---

**Example Outputs**

| Language Code       | Output            |
| ------------------- | ----------------- |
| `'es'`              | Hola, Mundo       |
| `'fr'`              | Bonjour, le monde |
| `'de'`              | Hallo, Welt       |
| `'en'` or any other | Hello, World      |

---

**🚀 How to Run**

1. Save the file as translator.js

2. Open your terminal in the same directory.

3. Run the program using Node.js:

```bash
node translator.js

```

4. Change the languageCode value to test different greetings.

---


# 📝 To-Do List Manager (Second-Assignment)

This project is a **Take-Home Assignment** that demonstrates how to build a simple **To-Do List Manager** using **arrays, objects, functions, and loops** in JavaScript.

It simulates adding, displaying, completing, and deleting tasks in a console-based mini application.

---

## 🎯 Objective

The goal of this project is to:

- Practice how to store and manage data using **arrays of objects**.
- Build reusable **functions** for common operations.
- Use **loops** and **array methods** (`findIndex()`, `push()`, `splice()`) to manipulate data.
- Simulate how a simple to-do list app works.

---

## 🧩 Data Structure

```js
const todoList = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Finish Week 4 assignment", completed: true },
];
let nextId = 3;
```

Each task is represented as an object with:

- id → a unique number identifying the task

- task → a short description of the task

- completed → a boolean that shows whether the task is done (true) or not (false)

---

  ## ⚙️ Functions Overview

  1️⃣ `displayTasks()`

Displays all tasks in the console with their completion status and ID.

##### Example Output:

```bash
[x] Finish Week 4 assignment - completed: true Id:(2)
[ ] Buy groceries - completed: false Id:(1)
```

---

2️⃣ `createTask(task)`

Creates and returns a new task object with:

- A unique ID (auto-incremented)

- The given task text

- completed: false by default

##### Output Example

````js
createTask("Clean my room");
````

---

 3️⃣ `addTask(task)`

Adds a new task to the list using the createTask() function and prints a confirmation message.

##### Example

````js
addTask("Clean my room");
````

#### output

```bash
Added task: "Clean my room" with ID: 3
```

---

4️⃣ `markTaskComplete(taskId)`

Marks the task with the given id as complete.
If the task doesn’t exist, it shows a “not found” message.

#### Example

```js
markTaskComplete(1);

```

#### output

```bash
task with id:1 marked as complete
```

---

5️⃣ `deleteTask(taskId) 🏆 (Bonus Challenge)`

Finds a task by its ID using findIndex() and removes it from the list with splice().

#### Example:

```js
deleteTask(2);

```

#### output:

```bash
task with id:2 deleted
```

---

#### 🧠 Simulation of Operations

At the bottom of the file, several test operations simulate the app’s usage:

```js
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
```
---

#### How to Run

1. Save the code in a file named todo.js

2. Open your terminal or command prompt in the same directory.

3. Run:

---

#### 👨‍💻 Author

**Name:** Ikechukwu Agu
**Assignments:** 

- Translator (if/else conditional statement)

- To-Do List Manager (Arrays, Objects, Functions, and Loops)
**Language:** JavaScript (Node.js)

---
**🪪 License**
This project is for educational purposes and may be freely used or modified.
