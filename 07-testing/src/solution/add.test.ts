import add from "./add";

// Exercise 1
describe("Test that add returns the correct result from two numbers", () => {
  it("should return the sum of two numbers", () => {
    const result = add(3, 2);
    expect(result).toEqual(5);
  });
});

// Exercise 2
describe("Test that the add works with negative numbers", () => {
  it("should return the sum of two numbers when one is negative", () => {
    const result = add(-2, 5);
    expect(result).toEqual(3);
  });

  it("should return the sum of two numbers when both are negative", () => {
    const result = add(-2, -3);
    expect(result).toEqual(-5);
  });
});

// Exercise 3 - note: these tests don't even compile with TS!
describe("Test that there will be an error if you pass in non-numbers", () => {
  it("should throw an error when one of the arguments is not a number", () => {
    expect(() => add("3" as any, 2)).toThrow();
  });
  it("should throw an error when both arguments are not numbers", () => {
    expect(() => add("a" as any, "b" as any)).toThrow();
  });
});
