
# 🧮 Assignment – Array Operations in JavaScript

## 🎯 Objective

The objective of this assignment was to practice **looping through arrays** and performing basic operations such as calculating the **sum**, **average**, and **maximum** value.  
It helped reinforce my understanding of **loops**, **functions**, and **template literals** in JavaScript.

---

## 🧰 What I Did

I was given an array of numbers:

```javascript
const numbers = [22, 67, 33, 96, 88, 72, 49, 11, 53];
```

From this array, I was asked to:

1. Write a function that returns the sum of all numbers.

2. Write another function that returns the largest number in the array.

3. Use both results to calculate the average.

4. Finally, print out all three values — sum, average, and maximum — using console.log().

## ⚙️ How I Did It

I created two separate functions:

- `calculateSum(arr)` → loops through the array using a for...of loop and adds each number to a variable called sum.

- `findMax(arr) `→ starts by assuming the first number is the largest, then loops through the rest to check if any number is bigger.

After defining these functions, I called them using the `numbers` array and stored the results in constants:

```js
const sumResult = calculateSum(numbers);
const maxResult = findMax(numbers);

```

Then, I calculated the average by dividing the total sum by the length of the array:

```js
const average = sumResult / numbers.length;
```

Finally, I used template literals to print a clear report in the console:

```js
console.log(`Sum: ${sumResult}, Average: ${average}, Max: ${maxResult}`);
```

🧠 What I Learned

How to loop through arrays using for...of and for loops.

How to return values from functions and store them in variables.

How to use template literals to format output neatly.

The importance of placing return statements correctly

## 🧾 Output

```js
Sum: 491, Average: 54.55555555555556, Max: 96
```

---

[Back-to-home](../../README.md)