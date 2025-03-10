export function selectionSort(array) {
  for (let outer = 0; outer < array.length; outer++) {
    let smallest = outer;

    for (let inner = outer + 1; inner < array.length; inner++) {
      if (array[inner] < array[smallest]) {
        smallest = inner;
      }
    }

    let temp = array[outer];
    array[outer] = array[smallest];
    array[smallest] = temp;
  }

  return array;
}
