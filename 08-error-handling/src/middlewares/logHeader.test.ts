import { NextFunction, Request, Response } from "express";
import logHeader from "./logHeader";
import { add } from "../utils/math";

jest.mock("../utils/math", () => ({
  add: jest.fn(),
}));

describe("Log Header Middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {};
    nextFunction = jest.fn(); // Reset mock function before each test
    console.log = jest.fn(); // Mock console.log
    jest.clearAllMocks();
  });

  test("missing X-Log header", () => {
    logHeader(mockRequest as Request, mockResponse as Response, nextFunction);

    (add as jest.Mock).mockReturnValue("hello");

    expect(console.log).not.toHaveBeenCalled();
    expect(add).not.toHaveBeenCalled();
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
    expect(add).toHaveBeenCalled();
    expect(nextFunction).toHaveBeenCalledTimes(1);
  });
});

const response = {
  json: {
    body: {
      length: jest.fn(),
    },
  },
};
