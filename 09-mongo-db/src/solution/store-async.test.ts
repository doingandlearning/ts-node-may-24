import store from "./store-async";

describe("store function", () => {
  describe("Successful storage", () => {
    it("should return an object with an id when given a Buffer", async () => {
      const buffer = Buffer.from("Test data");
      const result = await store(buffer);
      expect(result.id).toBeDefined();
      expect(typeof result.id).toEqual("string");
      expect(result.id.length).toBe(4);
    });
  });

  describe("Input validation", () => {
    it("should throw an error when the input is not a Buffer", async () => {
      const input = "Not a buffer";
      try {
        await store(input as any); // Type assertion to bypass TypeScript type checking
        throw new Error("store did not throw an error with invalid input"); // Fail test if no error thrown
      } catch (error) {
        if (error instanceof Error) {
          expect(error.message).toEqual("input must be a buffer");
        }
      }
    });
  });

  describe("Asynchronous operation", () => {
    it("should take at least 300 ms to return a result", async () => {
      const buffer = Buffer.from("Test data");
      const startTime = Date.now();
      await store(buffer);
      const endTime = Date.now();
      expect(endTime - startTime).toBeGreaterThanOrEqual(300);
    });
  });
});
