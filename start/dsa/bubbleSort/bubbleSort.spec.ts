import { bubbleSort } from "./bubbleSort";

describe("bubbleSort Function", () => {
  test("should sort an array of positive numbers", () => {
    expect(bubbleSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });

  test("should handle an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an array with all identical elements", () => {
    expect(bubbleSort([3, 3, 3, 3])).toEqual([3, 3, 3, 3]);
  });

  test("should sort an array with negative numbers", () => {
    expect(bubbleSort([-3, -1, -2, 0, 2, 1])).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  test("should sort an array with mixed positive and negative numbers", () => {
    expect(bubbleSort([3, -1, 4, -2, 0])).toEqual([-2, -1, 0, 3, 4]);
  });

  test("should handle an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test("should handle a single-element array", () => {
    expect(bubbleSort([5])).toEqual([5]);
  });

  test("should correctly sort an array with floating-point numbers", () => {
    expect(bubbleSort([3.2, 1.1, 2.4, 5.6])).toEqual([1.1, 2.4, 3.2, 5.6]);
  });

  test("should correctly sort an array with large numbers", () => {
    expect(bubbleSort([1000, 500, 100, 50, 10, 5, 1])).toEqual([
      1, 5, 10, 50, 100, 500, 1000,
    ]);
  });
});
