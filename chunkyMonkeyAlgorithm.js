/*
Completed December 17th, 2025
Function splits the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.
Assignment Provided by FreeCodeCamp.org
*/

function chunkArrayInGroups(arr, num) {
  let result = [];

  for (let i = 0; i < arr.length; i += num) { // this will iterate by "num". Can also be written as i = i + num
    let chunk = arr.slice(i, i + num); // slice starts at "i" and ends at "i + num"
    result.push(chunk) // this will store the chunks into result
  }

  return result
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
// returns [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6 ] ]
