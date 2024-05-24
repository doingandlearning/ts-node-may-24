### Lab Exercise: Creating and Testing a Custom Middleware with Header Logging in an Express Project

#### Objective:
Create a custom middleware that checks for a custom header (`X-Log`) and logs its value if present, and write tests for it using Jest.

#### Step-by-Step Instructions:

#### Step 1: Create the Middleware

1. **Create a new middleware file**:
   - Navigate to your `src/middlewares/` directory (or create it if it doesn't exist).
   - Create a file named `logHeader.ts`.

2. **Define the middleware function**:
   - Open `logHeader.ts` and define the middleware function to check for the `X-Log` header.
   - If the `X-Log` header is present, log its value.
   - Always call `next()` to pass control to the next middleware.

#### Step 2: Create Tests for the Middleware

1. **Create a test directory and file**:
   - Navigate to your `src/middlewares/` directory.
   - Create a subdirectory named `__tests__` if it doesn't exist.
   - Inside the `__tests__` directory, create a file named `logHeader.test.ts`.

2. **Set up the test environment**:
   - In `logHeader.test.ts`, import necessary modules from `express` and the middleware function `logHeader`.
   - Set up the test suite using `describe` and define mock objects for `Request`, `Response`, and `NextFunction`.

3. **Write test cases**:
   - Write test cases to cover scenarios where the `X-Log` header is missing and where it is present.
   - Mock `console.log` to verify that it is called correctly.
			- `console.log = jest.fn()` - decide if this should happen beforeEach test, beforeAll tests or just as needed.

#### Step 3: Run the Tests

1. **Run the tests**:
   - Execute the following command in your terminal to run the tests:

   ```bash
   npm test
   ```


## Solution:

middleware:

```ts
import { NextFunction, Request, Response } from "express";

export default function logHeader(req: Request, res: Response, next: NextFunction) {
  if (req.headers['x-log']) {
    console.log(`X-Log Header: ${req.headers['x-log']}`);
  } 
  next();
}
```

Test

```ts
   import { NextFunction, Request, Response } from "express";
   import logHeader from "../logHeader";

   describe("Log Header Middleware", () => {
     let mockRequest: Partial<Request>;
     let mockResponse: Partial<Response>;
     let nextFunction: NextFunction = jest.fn();

     beforeEach(() => {
       mockRequest = {};
       mockResponse = {};
       nextFunction = jest.fn(); // Reset mock function before each test
       console.log = jest.fn(); // Mock console.log
     });

     test("missing X-Log header", () => {
       logHeader(
         mockRequest as Request,
         mockResponse as Response,
         nextFunction
       );

       expect(console.log).not.toBeCalled();
       expect(nextFunction).toBeCalledTimes(1);
     });

     test("with X-Log header", () => {
       mockRequest = {
         headers: {
           'x-log': "Test log value",
         },
       };

       logHeader(
         mockRequest as Request,
         mockResponse as Response,
         nextFunction
       );

       expect(console.log).toBeCalledWith("X-Log Header: Test log value");
       expect(nextFunction).toBeCalledTimes(1);
     });
   });
```

### Explanation:

1. **Middleware**:
   - The `logHeader` middleware checks for the presence of the `X-Log` header in the request.
   - If the `X-Log` header is present, it logs its value.
   - The middleware always calls `next()` to pass control to the next middleware in the stack.

2. **Tests**:
   - Tests are set up to verify the behavior of the middleware in different scenarios.
   - When the `X-Log` header is missing, the middleware should not log anything and should call `next()`.
   - When the `X-Log` header is present, the middleware should log the value of the header and call `next()`.
