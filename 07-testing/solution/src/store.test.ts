import store from "./store";

describe("store function", () => {
  describe("Successful storage", () => {
    it("should return an object with an id when given a Buffer", (done) => {
      const buffer = Buffer.from("Test data");
      store(buffer, (error, data) => {
        expect(error).toBe(null);
        expect(data?.id).toBeDefined();
        expect(typeof data?.id).toBe("string");
        expect(data?.id.length).toBe(4);
        done();
      });
    });
  });

  describe("Input validation", () => {
    it("should call the callback with an error when the input is not a Buffer", (done) => {
      const input = "Not a buffer";
      store(input as any, (error, data) => {
        if (error instanceof Error) {
          expect(error.message).toEqual("input must be a buffer");
          expect(data).not.toBeDefined();
          done();
        }
      });
    });
  });

  describe("Asynchronous operation", () => {
    it("should take at least 300 ms to return a result", (done) => {
      const buffer = Buffer.from("Test data");
      const startTime = Date.now();
      store(buffer, (error, data) => {
        const endTime = Date.now();
        expect(endTime - startTime).toBeGreaterThanOrEqual(300);
        done();
      });
    });
  });
});
