export function maxSumSubArray(array, num) {
  if (array.length < 1) return null;
  if (array.length < num) return null;

  let maxCount = 0;

  for (let i = 0; i < num; i++) maxCount += array[i];

  let newCount = maxCount;
  
  for (let i = num; i < array.length; i++) {

    newCount += array[i];
    newCount -= array[i-num];
    
    if (newCount > maxCount) {
      maxCount = newCount;
    }
  }

  return maxCount;
}

console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 3));
