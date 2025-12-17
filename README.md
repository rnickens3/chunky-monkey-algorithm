# Chunky Monkey Algorithm (Made with FreeCodeCamp.org)
Function splits array into chunks equal to second argument and returns chunks as a 2d array.

## User Stories:

1. Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument.
2. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.

## Tools & Languages Used
* JavaScript

## Features
* Function takes two perimeters: array and a number.
* Array determines characters that will be split into chunks.
* Number deterimines how array will be divided.
* User is able to use this function to divide the array into however many chunks they want.

## Concepts Learned
* Iteration technique -> i += num

## Examples
```
function chunkArrayInGroups(arr, num) {
  let result = [];

  for (let i = 0; i < arr.length; i += num) {
    let chunk = arr.slice(i, i + num);
    result.push(chunk)
  }

  return result
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))
// returns [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ]

```
```
function chunkArrayInGroups(arr, num) {
  let result = [];

  for (let i = 0; i < arr.length; i += num) {
    let chunk = arr.slice(i, i + num);
    result.push(chunk)
  }

  return result
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
// returns [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6 ] ]

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
3. Change function perimeters as desired
