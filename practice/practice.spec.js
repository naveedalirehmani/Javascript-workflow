const sumNumbersUpToN = require('./sumNumbersUpToN'); // Assuming this is the correct file path

describe('sumNumbersUpToN', () => {
  test('should return the correct sum for a positive number', () => {
    expect(sumNumbersUpToN(5)).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
    expect(sumNumbersUpToN(10)).toBe(55); // 1 + 2 + 3 + ... + 10 = 55
    expect(sumNumbersUpToN(1)).toBe(1); // 1 = 1
  });

  test('should return 0 when input is 0', () => {
    expect(sumNumbersUpToN(0)).toBe(0); // Edge case: sum of numbers up to 0 is 0
  });

  test('should throw an error for negative inputs', () => {
    expect(() => sumNumbersUpToN(-1)).toThrow('Invalid input');
    expect(() => sumNumbersUpToN(-5)).toThrow('Invalid input');
  });

  test('should handle large inputs', () => {
    expect(sumNumbersUpToN(100)).toBe(5050); // 1 + 2 + ... + 100 = 5050
    expect(sumNumbersUpToN(1000)).toBe(500500); // 1 + 2 + ... + 1000 = 500500
  });
});
