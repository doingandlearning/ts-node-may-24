import { add } from "./math";

// describe/it - group tests together

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
