import { divide } from "../unitOne";
import { expect, it } from "vitest";

it("Valid Division", () => {
  expect(divide(10, 2)).toBe(5);
});

it("Valid Division with Negative Numbers", () => {
  expect(divide(-10, 2)).toBe(-5);
});

it("Division by Zero", () => {
  expect(() => divide(5, 0)).toThrowError("Division by zero");
});