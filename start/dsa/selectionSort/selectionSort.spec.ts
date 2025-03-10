import { selectionSort } from "./selectionSort"; // Adjust the path if needed

test("sorts an array of numbers", () => {
  expect(selectionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
});

test("handles an already sorted array", () => {
  expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("handles a reversed array", () => {
  expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("handles an array with duplicate values", () => {
  expect(selectionSort([4, 2, 2, 8, 3, 3, 1])).toEqual([1, 2, 2, 3, 3, 4, 8]);
});

test("handles an empty array", () => {
  expect(selectionSort([])).toEqual([]);
});

test("handles a single-element array", () => {
  expect(selectionSort([1])).toEqual([1]);
});