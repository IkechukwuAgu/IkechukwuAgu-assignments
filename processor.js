const numbers = [22, 67, 33, 96, 88, 72, 49, 11, 53];

// Write a function calculateSum(arr) that takes an array, loops through it, and **returns** the sum of all its numbers.

function calculateSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// Write a function findMax(arr) that takes an array, loops through it, and **returns** the largest number in the array.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    return max;
  }
}

//Call your functions with the numbers array and store their results in `const` variables.
const sumResult = calculateSum(numbers);
const maxResult = findMax(numbers);

// Calculate the average by dividing the sum by the array's length.

const average = sumResult / numbers.length;

// Use console.log() and template literals to print a report of the results: "Sum: [sum], Average: [avg], Max: [max]".

console.log(`Sum: ${sumResult}, Average: ${average}, Max: ${maxResult}`);







// BONUS (personal challenge): Write a function to calculate the median of the array.

// Find the minimum by initializing a variable to the first element and updating it when a smaller number is found.

// function findMin(arr) {
// let min = numbers[0];
// for (let num of numbers) {
//     if (num < min) {
//         min = num;
//     }
// }
// return min;
// }
// const min = findMin(numbers);

// function calculateMedian(arr) {
//     const sortedArr = [...arr].sort((a, b) => a - b);
//     const mid = Math.floor(sortedArr.length / 2);
// return mid
// }
// const median = calculateMedian(numbers);

// console.log(`Min: ${min}, Median: ${median}`);


