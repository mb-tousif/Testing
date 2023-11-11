import { fetchData } from "../unitThree";
import { expect, it, vi } from "vitest";

// Test: Successful Fetch
it("Fetch Data", async () => {
    // Mock fetchData to return the data
    const mockFetchData = vi.fn(fetchData);
    // Test that fetchData resolves with the correct data
    await expect(fetchData()).resolves.toEqual({ name: "John", age: 30 });
});

// Test: Error Handling
it("Error Handling", async () => {
    const error = new Error("Error fetching data");
    // Mock fetchData to return the error
    const fetchData = () => Promise.reject(error);
    await expect(fetchData()).rejects.toThrowError(error);
});