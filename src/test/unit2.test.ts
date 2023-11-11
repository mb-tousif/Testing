import { expect, it, vi } from "vitest";
import { executeCallback } from "../unitTwo";

// Test: Callback Execution
it("Callback Execution", () => {
    // Create a mock function
  const mockCallback = vi.fn();
    // Execute the callback
  executeCallback(mockCallback, "Buy groceries");
    // Test that the mock function was called
  expect(mockCallback).toHaveBeenCalled();
});

// Test: Callback Execution with Task Text
it("Callback Execution with Task Text", () => {
    // Create a mock function
  const mockCallback = vi.fn();
    // Execute the callback
  executeCallback(mockCallback, "Buy groceries");
    // Test that the mock function was called with the correct text
  expect(mockCallback).toHaveBeenCalledWith("Buy groceries");
});
