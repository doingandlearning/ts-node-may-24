import { NextFunction, Request, Response } from "express";
import logHeader from "./logHeader";

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
    logHeader(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(console.log).not.toHaveBeenCalled();
    expect(nextFunction).toHaveBeenCalledTimes(1);
  });

  test("with X-Log header", () => {
    mockRequest = {
      headers: {
        "x-log": "Test log value",
      },
    };

    logHeader(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(console.log).toHaveBeenCalledWith("X-Log Header: Test log value");
    expect(nextFunction).toHaveBeenCalledTimes(1);
  });
});
