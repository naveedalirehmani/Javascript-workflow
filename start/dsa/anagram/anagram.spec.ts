import { anagram } from './anagram'; // Update with the correct file path

describe("Anagram Function", () => {
    test("should return true for anagrams without spaces", () => {
        expect(anagram("iceman", "cinema")).toBe(true);
        expect(anagram("listen", "silent")).toBe(true);
    });

    test("should return false for non-anagrams", () => {
        expect(anagram("hello", "world")).toBe(false);
        expect(anagram("test", "rest")).toBe(false);
    });

    test("should return true for anagrams with spaces", () => {
        expect(anagram("debit card", "bad credit")).toBe(true);
        expect(anagram("school master", "the classroom")).toBe(true);
    });

    test("should be case insensitive", () => {
        expect(anagram("Listen", "Silent")).toBe(true);
        expect(anagram("ICEMAN", "Cinema")).toBe(true);
    });

    test("should handle words with extra spaces", () => {
        expect(anagram(" debit card ", "  bad credit")).toBe(true);
        expect(anagram("school master", " the  classroom ")).toBe(true);
    });

    test("should return false for different-length words", () => {
        expect(anagram("hello", "helloo")).toBe(false);
        expect(anagram("abcd", "abc")).toBe(false);
    });

    test("should return false for empty strings", () => {
        expect(anagram("", "cinema")).toBe(false);
        expect(anagram("listen", "")).toBe(false);
        // expect(anagram("", "")).toBe(false);
    });

    test("should handle special characters and numbers", () => {
        expect(anagram("123abc", "abc321")).toBe(true);
        expect(anagram("hello!", "o!lhel")).toBe(true);
        expect(anagram("hello!", "hello")).toBe(false);
    });
});
