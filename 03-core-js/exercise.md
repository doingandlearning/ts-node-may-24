# Exercise: ES6+ Features

## Goal

Your task is to apply your knowledge of the ES6+ features to solve the following exercises. This will help you get hands-on experience with these concepts and reinforce your understanding.

## 1. Default Parameters & Template Literals

### Description

Create a function to greet a user. If no name is provided, it should default to 'Guest'. The greeting should be done using template literals.

### Instructions

- Define a function `greetUser`.
- The function should take a name parameter with a default value of 'Guest'.
- Return a greeting message using template literals.

**Example:**

```typescript
greetUser(); // "Hello, Guest!"
greetUser("John"); // "Hello, John!"
```

## 2. Object Literals

### Description

Given a list of variables `brand`, `model`, `year`, and `color`, create a car object without repeating the property names.

### Instructions

- Define variables: `brand`, `model`, `year`, and `color`.
- Create an object `car` using shorthand property names.

**Example:**

```typescript
const brand = "Toyota";
const model = "Camry";
const year = 2021;
const color = "Blue";

const car = // Your solution here.
```

## 3. Arrow Functions

### Description

Convert a list of regular function expressions to arrow functions.

### Instructions

Given the following list of functions:

```typescript
function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}
```

Convert them to arrow functions.

## 4. let/const

### Description

Given a piece of code with `var`, identify and fix potential issues by converting them to `let` or `const`.

### Instructions

Review the following code:

```typescript
var number = 5;
var multiplier = 10;
var product = number * multiplier;
```

Refactor the code using `let` and `const` where appropriate.
