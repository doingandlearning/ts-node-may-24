import { NextFunction, Request, Response } from "express";
import authorizationMiddleware from "./authorization";

describe("Authorization middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
    };
  });

  test("without headers", async () => {
    const expectedResponse = {
      error: "Missing JWT token from the 'Authorization' header",
    };
    authorizationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  test('without "authorization" header', async () => {
    const expectedResponse = {
      error: "Missing JWT token from the 'Authorization' header",
    };
    mockRequest = {
      headers: {},
    };
    authorizationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  test('with "authorization" header', async () => {
    mockRequest = {
      headers: {
        authorization: "Bearer abc",
      },
    };
    authorizationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
  });
});
