//? Understanding the problem.

//? Can I restate the problem?
//? what are the inputs that go into the problem?
//? what are the expected output to the problem?
//? Can the output be derived from the input?
//? Labelling the important pieces.

//? ||
// 1. it will implicitly convert all the operands to boolean.
// or operator will always try to find first truthly value and return it.
// if not found it will return last value in the chain.

//? &&
// 2. it will implicitly convert all the operands to boolean.
// and operator will always try to find first falsy value, if not found
// it will return the last value in the chain.

// Write a function that checks whether a given array is sorted in ascending order. The function should:

// 1. Accept an array of integers as input.
// 2. Return `true` if the array is sorted in strictly ascending order.
// 3. Return `false` otherwise.

// function isArrayIsSorted(array){

// }

// Understanding the problem.
// Can I restate the problem?
//  write a function that will take a array of integers as input, the array input will not be empty, we need to return true if the array is sorted, false if not.

// what are the inputs that go into the problem?
//  an array of integers.

// what are the expected output to the problem?
//  true if the input array is sorted.
//  false if the input is not sorted.

// Can the output be derived from the input?
//  yes.

// Labelling the important pieces.
//  we will loop over the array of integers with for of loop
//  check to see if if the current integer in the interation is larger than the upcoming integer
//  the current integer in the iteration will be array[i], the upcoming integer will equal to array[i+1]
//  if array[i] is < array[i+1], contiue with the next iteration;
//  if array[i] is = array[i+1], contiue with the next iteration;
//  if array[i] is not < array[i+!] return false.
//  after the loop ends return true.
