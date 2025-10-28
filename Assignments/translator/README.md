
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

### Example Outputs

| Language Code       | Output            |
| ------------------- | ----------------- |
| `'es'`              | Hola, Mundo       |
| `'fr'`              | Bonjour, le monde |
| `'de'`              | Hallo, Welt       |
| `'en'` or any other | Hello, World      |

---

### 🚀 How to Run

1. Save the file as translator.js

2. Open your terminal in the same directory.

3. Run the program using Node.js:

```bash
node translator.js

```

4. Change the languageCode value to test different greetings.

---

[Back-to-home](../../README.md)
