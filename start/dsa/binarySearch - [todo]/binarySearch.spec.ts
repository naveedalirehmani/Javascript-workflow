import { binarySearch } from "./binarySearch"; // Replace with actual filename

describe("binarySearch Function", () => {
    test("should return the index of the target in a sorted array", () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(binarySearch([10, 20, 30, 40, 50], 20)).toBe(1);
        expect(binarySearch([-5, -3, 0, 2, 4, 6, 8], 4)).toBe(4);
    });

    test("should return -1 when the target is not in the array", () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
        expect(binarySearch([-10, -5, 0, 5, 10], 7)).toBe(-1);
    });

    test("should return the correct index for edge elements", () => {
        expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0); // First element
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4); // Last element
    });

    test("should return -1 for an empty array", () => {
        expect(binarySearch([], 10)).toBe(-1);
    });

    test("should return 0 if there's only one element and it matches the target", () => {
        expect(binarySearch([5], 5)).toBe(0);
    });

    test("should return -1 if there's only one element but it doesn't match the target", () => {
        expect(binarySearch([5], 3)).toBe(-1);
    });

    // test("should work correctly for large inputs", () => {
    //     const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
    //     expect(binarySearch(largeArray, 999999)).toBe(999999);
    //     expect(binarySearch(largeArray, -1)).toBe(-1);
    // });
});
