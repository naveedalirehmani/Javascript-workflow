import { substringSearch } from "./substringSearch"; // Adjust path if needed

test("finds substring at the beginning", () => {
  expect(substringSearch("hello world", "hello")).toBe(0);
});

test("finds substring in the middle", () => {
  expect(substringSearch("hello world", "world")).toBe(6);
});

test("finds substring at the end", () => {
  expect(substringSearch("abcdef", "ef")).toBe(4);
});

test("returns -1 when substring is not found", () => {
  expect(substringSearch("hello world", "bye")).toBe(-1);
});

test("handles case sensitivity", () => {
  expect(substringSearch("Hello World", "hello")).toBe(-1);
});

test("handles repeated substrings and returns first occurrence", () => {
  expect(substringSearch("banana", "na")).toBe(2);
});

test("handles empty substring", () => {
  expect(substringSearch("hello world", "")).toBe(0); // Edge case: empty substring is found at index 0
});

test("handles empty string input", () => {
  expect(substringSearch("", "hello")).toBe(-1);
});

test("handles both empty string and empty substring", () => {
  expect(substringSearch("", "")).toBe(0);
});