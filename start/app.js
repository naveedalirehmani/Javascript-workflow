// boolean true or false
// string
// "" , '' & ``
// number
// integers , floating point numbers, infinity, -inifinity & Nan.
// null
// undefined
// bigint
// non-primitives
// symbols
// let num1 = '2'
// let num2 = '4'
// let result = num2-num1
// console.log(typeof result)

// function countUniqueValues(sortedArray) {
//   if (sortedArray.length === 0) return 0;

//   let current = 0;
//   for (let index = 0; index < sortedArray.length; index++) {
//     const element = sortedArray[index];
//     if (!(sortedArray[current] === element)) {
//       current++;
//       sortedArray[current] = sortedArray[index];
//     }
//   }
//   return current + 1;
// }

// console.log(countUniqueValues([1, 1, 1, 2, 2, 3])); // 3
// console.log(countUniqueValues([5, 5, 5, 5, 5])); // Output: 1
// console.log(countUniqueValues([0, 1, 2, 3, 4])); // Output: 5
// console.log(countUniqueValues([-10, -10, -5, 0, 0, 1, 2, 2, 3, 5])); // Output: 7
// console.log(countUniqueValues([])); // Output: 0

// function maxSumSubArray(array, num) {
//   if(!array.length) return null;
//   let sum = 0;
//   for (let index = 0; index < num; index++) {
//     sum += array[index];
//   }
//   let total = sum;
//   for (let index = num; index < array.length; index++) {
//     sum = sum - array[index-num] + array[index]
//     total = Math.max(total,sum)
//   }
//   return total;
// }

// console.log(maxSumSubArray([1, 2, 5, 2, 8, 1, 5], 2)); // Output: 10
// console.log(maxSumSubArray([1, 2, 5, 2, 8, 1, 5], 4)); // Output: 17
// console.log(maxSumSubArray([-3, 4, 0, -2, 6, -1], 2)); // Output: 4
// console.log(maxSumSubArray([3, -2, 7, -4, 1, 4, 9, -2], 3)); // Output: 14
// console.log(maxSumSubArray([100, 200, 300, 400], 2)); // Output: 700
// console.log(maxSumSubArray([], 2)); // Output: null

