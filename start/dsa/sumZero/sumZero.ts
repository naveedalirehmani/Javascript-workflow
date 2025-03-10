export function sumZero(array) {
  if (array.length < 2) return undefined;

  let left = 0;
  let right = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left],  array[right]];
    }

    if (sum > 0) {
      right--;
    }

    if (sum < 0) {
      left++;
    }
  }

  return undefined;
}

console.log(sumZero([-5, -3, -2, -1, 0, 1, 3, 5]))