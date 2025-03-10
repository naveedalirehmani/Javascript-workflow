export function binarySearch(array, target) {
  if (array.length < 1) return -1;

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === target) return middle;

    if (target > array[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}


