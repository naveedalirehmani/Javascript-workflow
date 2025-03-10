export function addBinary(a, b) {
  if (!a.length && !b.length) throw new Error();

  if (!a.length) return b;
  if (!b.length) return a;

  let larger = b;
  let smaller = a;

  if (a.length > b.length) {
    larger = a;
    smaller = b;
  }

  const result: number[] = [];

  let carry = 0;

  for (let index = larger.length - 1; index >= 0; index--) {
    const element = Number(larger[index]);
    const element2 = Number(smaller[index - (larger.length - smaller.length)]);

    console.log(index);
    console.log(element);
    console.log(element2);

    if (isNaN(element2)) {
      console.log(index);
      result.unshift(element);
      continue;
    }

    if (element + element2 + carry == 3) {
      console.log(index);
      result.unshift(1);
      carry = 1;
    } else if (element + element2 + carry == 2) {
      console.log(index);
      result.unshift(0);
      carry = 1;
    } else if (element + element2 + carry == 1) {
      console.log(index);
      result.unshift(1);
      carry = 0;
    }
  }

  if (carry) {
    result.unshift(1);
  }

  return result;
}

console.log(addBinary("10101", "1011")); // "11100"
// console.log(addBinary("1", "1")); // "10"
// console.log(addBinary("0", "0")); // "0"
// console.log(addBinary("111", "1")); // "1000"
// console.log(addBinary("1010", "1011")); // "10101"

10101;
1011;
