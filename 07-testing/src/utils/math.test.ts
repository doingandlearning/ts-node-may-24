import { add } from "./math";

// describe - group tests together
// it/test

describe("happy path tests", () => {
  test("add two numbers together correctly", () => {
    // Arrange - Given
    const num1 = 7;
    const num2 = 10;
    const want = 17;

    // Act - When
    const result = add(num1, num2);
    // Assert - Then
    expect(result).toBe(17);
  });
});

test("this will fail if i don't pass in numbers", () => {
  const num1 = true;
  const num2 = "1";
  expect(() => add(num1 as any, num2 as any)).toThrow();
  expect(() => add(num1 as any, num2 as any)).toThrowErrorMatchingSnapshot();
});
