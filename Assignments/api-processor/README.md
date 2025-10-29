# 🧾 Asynchronous API Data Processor

## 📘 Overview

This project demonstrates how to use asynchronous JavaScript (async/await) and Promise.all() to handle multiple API requests efficiently.
The script fetches data from the JSONPlaceholder API, combines information about users and their completed to-do tasks, and prints the structured result to the console.

---

### ⚙️ How It Works

1. Fetch Users: Retrieves a list of users from https://jsonplaceholder.typicode.com/users.

2. Fetch Todos: For each user, sends a request to get their todos using their user ID.

3. Concurrent Requests: Uses Promise.all() to run all API requests at the same time (for better performance).

4. Process Data: Filters each user’s todos to include only the completed tasks and extracts their titles.

5. Combine Results: Merges each user’s details with their list of completed todo titles.

6. Output: Logs the final structured data as an array of user objects in the console.

---

## 🧠 Key Concepts Used

- Axios: For making HTTP requests easily in Node.js

- Async/Await: For cleaner asynchronous code

- Promise.all(): To handle multiple API calls concurrently

- Array Methods: .map() and .filter() for processing data

- Destructuring: To extract specific data from responses

---

## 💻 Setup Instructions

1. Initialize a Node.js project:

```bash
npm init -y
```


2. Install dependencies:

```bash
npm install axios
```

3. Run the script:

```bash
node api-processor.js
```

### Example Output

```json
[
  {
    "id": 1,
    "username": "Bret",
    "email": "Sincere@april.biz",
    "todos": [
      "delectus aut autem",
      "quis ut nam facilis et officia qui",
      "fugiat veniam minus"
    ]
  },
  {
    "id": 2,
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "todos": [
      "suscipit repellat esse quibusdam voluptatem incidunt",
      "distinctio vitae autem nihil ut molestias quo"
    ]
  }
]

```

### ✍️ Author

Developed by Ikechukwu Agu as part of an asynchronous programming assessment using Node.js.

---
[Back-to-home](../../README.md)