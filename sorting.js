function generateRandomArray(size, min, max) {
  const randomArray = [];

  for (let i = 0; i < size; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNum);
  }

  return randomArray;
}

const arraySize = 100000; // Adjust the size of the array as needed
const minValue = 1; // Minimum value of the random numbers
const maxValue = 10000; // Maximum value of the random numbers

const array = generateRandomArray(arraySize, minValue, maxValue);

function bubbleSort(array) {
    for (let main = 0; main < array.length; main++) {
        for (let inner = 0; inner < array.length - main - 1; inner++) {
            if (array[inner] > array[inner + 1]) {
                const temp = array[inner];
                array[inner] = array[inner + 1];
                array[inner + 1] = temp;
            }
        }
    }
    return array;
}

const time1 = performance.now();
bubbleSort(array)
console.log((performance.now() - time1) / 1000);


function selectionSort(array) {
    for (let main = 0; main < array.length; main++) {
        for (let inner = main; inner < array.length; inner++) {
            if (array[main] > array[inner]) {
                const temp = array[inner];
                array[inner] = array[main];
                array[main] = temp;
            }
        }
    }
    return array;
}

const time2 = performance.now();
selectionSort(array);
console.log((performance.now() - time2) / 1000);


function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) return;
  
    const pivotIndex = partition(array, left, right);
  
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  
    return array;
  }
  
  function partition(array, left, right) {
    const pivotValue = array[right];
    let pivotIndex = left;
  
    for (let i = left; i < right; i++) {
      if (array[i] < pivotValue) {
        swap(array, i, pivotIndex);
        pivotIndex++;
      }
    }
  
    swap(array, pivotIndex, right);
  
    return pivotIndex;
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  const time3 = performance.now()
  const sortedArray = quickSort(array);
  console.log((performance.now() - time3) / 1000);