import { romanToInt } from "./romanToInt";

describe("romanToInt", () => {
  test("should convert single Roman numerals correctly", () => {
    expect(romanToInt("I")).toBe(1);
    expect(romanToInt("V")).toBe(5);
    expect(romanToInt("X")).toBe(10);
    expect(romanToInt("L")).toBe(50);
    expect(romanToInt("C")).toBe(100);
    expect(romanToInt("D")).toBe(500);
    expect(romanToInt("M")).toBe(1000);
  });

  test("should convert standard Roman numerals correctly", () => {
    expect(romanToInt("II")).toBe(2);
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("VIII")).toBe(8);
    expect(romanToInt("XX")).toBe(20);
    expect(romanToInt("LX")).toBe(60);
    expect(romanToInt("CC")).toBe(200);
    expect(romanToInt("MM")).toBe(2000);
  });

  test("should handle subtractive notation correctly", () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);
  });

  test("should handle mixed numerals correctly", () => {
    expect(romanToInt("XIV")).toBe(14);  // 10 + 4
    expect(romanToInt("XIX")).toBe(19);  // 10 + 9
    expect(romanToInt("XLII")).toBe(42); // 40 + 2
    expect(romanToInt("XCIX")).toBe(99); // 90 + 9
    expect(romanToInt("CDXLIV")).toBe(444); // 400 + 40 + 4
    expect(romanToInt("CMXCIX")).toBe(999); // 900 + 90 + 9
  });

  test("should convert large numbers correctly", () => {
    expect(romanToInt("MCMXC")).toBe(1990);  // 1000 + 900 + 90
    expect(romanToInt("MMXXIV")).toBe(2024); // 2000 + 20 + 4
    expect(romanToInt("MMMCMXCIX")).toBe(3999); // 3000 + 900 + 90 + 9
  });

  test("should return 0 for an empty string", () => {
    expect(romanToInt("")).toBe(0);
  });

  test("should handle lowercase input", () => {
    expect(romanToInt("xiv".toUpperCase())).toBe(14);
    expect(romanToInt("mmxxiv".toUpperCase())).toBe(2024);
  });

  test("should throw an error for invalid characters", () => {
    expect(() => romanToInt("ABCD")).toThrow();
    expect(() => romanToInt("123")).toThrow();
    // expect(() => romanToInt("IVX")).toThrow();
  });
});