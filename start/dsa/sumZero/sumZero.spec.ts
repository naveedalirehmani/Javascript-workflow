import { sumZero } from "./sumZero"; // Assuming the function is in sumZero.ts

describe("sumZero", () => {
  test("should return the first pair summing to zero", () => {
    expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])).toEqual([-2, 2]);
  });

  test("should return the first occurring pair summing to zero", () => {
    expect(sumZero([-5, -3, -2, -1, 0, 1, 3, 5])).toEqual([-5, 5]);
  });

  test("should return undefined when no pair exists", () => {
    expect(sumZero([1, 2, 3, 4, 5])).toBeUndefined();
  })

  test("should return undefined for an empty array", () => {
    expect(sumZero([])).toBeUndefined();
  });

  test("should return undefined for a single element array", () => {
    expect(sumZero([0])).toBeUndefined();
  });

  test("should return the correct pair even with duplicates", () => {
    expect(sumZero([-2, -2, 0, 2, 2])).toEqual([-2, 2]);
  });

  test("should return undefined for an array with only positive numbers", () => {
    expect(sumZero([1, 2, 3, 4, 5, 10])).toBeUndefined();
  });

  test("should return undefined for an array with only negative numbers", () => {
    expect(sumZero([-10, -5, -2, -1])).toBeUndefined();
  });

  test("should return [-1, 1] for an array with exactly one valid pair", () => {
    expect(sumZero([-1, 0, 1])).toEqual([-1, 1]);
  });
});
