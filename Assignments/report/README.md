
# 💳  – Calculating Total Successful Debit Transactions

## 🧭 Overview

This project focuses on using JavaScript’s **array higher-order functions** to analyze financial transaction data.  
The aim was to calculate the **total amount of all successful debit transactions** from a dataset using a clean, functional programming approach.

---

## 🎯 Objective

The main objective was to:

- Strengthen my understanding of **functional array methods** (`filter()`, `map()`, `reduce()`).
- Learn how to transform and aggregate structured data in JavaScript.
- Practice writing concise and readable data processing logic without traditional loops.

---

## 📋 Dataset

The dataset consisted of an array of transaction objects, each with the following properties:

- `id`: unique transaction identifier.
- `type`: either `"debit"` or `"credit"`.
- `status`: `"success"` or `"failed"`.
- `amount`: the numeric value of the transaction.

```javascript
const transactions = [
  { id: "t1", type: "debit", status: "success", amount: 150 },
  { id: "t2", type: "credit", status: "success", amount: 200 },
  { id: "t3", type: "debit", status: "failed", amount: 100 },
  { id: "t4", type: "debit", status: "success", amount: 35 },
  { id: "t5", type: "debit", status: "success", amount: 120 },
];
```

### ⚙️ Implementation

The task was broken down into three main steps:

#### 1. Filter the Transactions

I used the filter() method to select only transactions where:

- The type is "debit".

- The status is "success".

```js
.filter((transaction) => transaction.type === "debit" && transaction.status === "success")
```

#### 2. Extract the Amounts

After filtering, I applied the map() method to extract just the amount values.

```js
.map((transaction) => transaction.amount)
```

#### 3. Calculate the Total

Finally, I used reduce() to sum all the amounts, starting from an initial value of 0.

```js
.reduce((sum, amount) => sum + amount, 0);
```

#### Full Code

```js
const totalDebitAmount = transactions
  .filter((transaction) => transaction.type === "debit" && transaction.status === "success")
  .map((transaction) => transaction.amount)
  .reduce((sum, amount) => sum + amount, 0);

console.log(`Total Successful Debit Amount: ${totalDebitAmount}`);
```

#### 🧩 Output

When executed, the program produces the following result in the console:

```yml
Total Successful Debit Amount: 305

```

#### ✍️ Author

##### Agu Ikechukwu

---

[Back-to-home](../../README.md)
