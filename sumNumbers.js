/*-----------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:


function sumNumbers(arr) {
    let sum = 0
    if (arr == []) {
        return 0
    } else {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
}

console.log(sumNumbers([10])) //=> 10
console.log(sumNumbers([5, 10])) //=> 15
console.log(sumNumbers([2, 10, -5])) //=> 7
console.log(sumNumbers([])) //=> 0
console.log(sumNumbers([]))