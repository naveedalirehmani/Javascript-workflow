export function bubbleSort(array) {
  for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] > array[index + 1]) {
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
      }
    }
  }

  return array;
}
