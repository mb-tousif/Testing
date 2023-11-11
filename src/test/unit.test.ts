import { divide } from "../unitOne";
import { expect, it } from "vitest";

// Test: Valid Division
it("Valid Division", () => {
  expect(divide(10, 2)).toBe(5);
});

// Test: Valid Division with Negative Numbers
it("Valid Division with Negative Numbers", () => {
  expect(divide(-10, 2)).toBe(-5);
});

// Test: Division by Zero
it("Division by Zero", () => {
  expect(() => divide(5, 0)).toThrowError("Division by zero");
});