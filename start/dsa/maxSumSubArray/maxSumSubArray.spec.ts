import { maxSumSubArray } from "./maxSumSubArray"; // Replace with actual filename

describe("maxSumSubArray Function", () => {
    test("should return the maximum sum of a subarray of length 3", () => {
        expect(maxSumSubArray([2, 1, 5, 1, 3, 2], 3)).toBe(9); // [5,1,3]
    });

    test("should return the maximum sum of a subarray of length 2", () => {
        expect(maxSumSubArray([1, 2, 3, 4, 5], 2)).toBe(9); // [4,5]
    });

    test("should return the maximum sum of a subarray of length 4", () => {
        expect(maxSumSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 4)).toBe(24); // [7,8,1,8]
    });

    test("should return null for an empty array", () => {
        expect(maxSumSubArray([], 3)).toBe(null);
    });

    test("should return null if num is greater than the array length", () => {
        expect(maxSumSubArray([1, 2, 3], 5)).toBe(null);
    });

    test("should return the only possible sum when num equals array length", () => {
        expect(maxSumSubArray([3, 1, 2, 6], 4)).toBe(12); // [3,1,2,6]
    });

    test("should return the correct result for negative numbers", () => {
        expect(maxSumSubArray([-1, -2, -3, -4], 2)).toBe(-3); // [-1,-2]
        expect(maxSumSubArray([-2, -1, 4, -1, -2, 1, 5, -3], 3)).toBe(6); // [4,-1,-2]
    });

    test("should return correct sum when all elements are the same", () => {
        expect(maxSumSubArray([5, 5, 5, 5, 5, 5], 2)).toBe(10); // [5,5]
    });

    test("should handle a single-element array", () => {
        expect(maxSumSubArray([5], 1)).toBe(5);
        expect(maxSumSubArray([5], 2)).toBe(null);
    });
});
