"use strict";

function generateRandomArray(size, min, max) {
  var randomArray = [];
  for (var i = 0; i < size; i++) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNum);
  }
  return randomArray;
}
var arraySize = 100000; // Adjust the size of the array as needed
var minValue = 1; // Minimum value of the random numbers
var maxValue = 10000; // Maximum value of the random numbers

var array = generateRandomArray(arraySize, minValue, maxValue);
function bubbleSort(array) {
  for (var main = 0; main < array.length; main++) {
    for (var inner = 0; inner < array.length - main - 1; inner++) {
      if (array[inner] > array[inner + 1]) {
        var temp = array[inner];
        array[inner] = array[inner + 1];
        array[inner + 1] = temp;
      }
    }
  }
  return array;
}
var time1 = performance.now();
bubbleSort(array);
console.log((performance.now() - time1) / 1000);
function selectionSort(array) {
  for (var main = 0; main < array.length; main++) {
    for (var inner = main; inner < array.length; inner++) {
      if (array[main] > array[inner]) {
        var temp = array[inner];
        array[inner] = array[main];
        array[main] = temp;
      }
    }
  }
  return array;
}
var time2 = performance.now();
selectionSort(array);
console.log((performance.now() - time2) / 1000);
function quickSort(array) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  if (left >= right) return;
  var pivotIndex = partition(array, left, right);
  quickSort(array, left, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, right);
  return array;
}
function partition(array, left, right) {
  var pivotValue = array[right];
  var pivotIndex = left;
  for (var i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, right);
  return pivotIndex;
}
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
var time3 = performance.now();
var sortedArray = quickSort(array);
console.log((performance.now() - time3) / 1000);
