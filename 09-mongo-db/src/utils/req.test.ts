import { fakeRequest } from "./req";

jest.setTimeout(30000);
jest.useFakeTimers();

// Mock

it("get a valid response from a non error url", async () => {
  const responsePromise = fakeRequest("https://hmrc.gov.uk");
  jest.advanceTimersByTime(5000); // setTimeout
  const response = await responsePromise;
  expect(response).toMatchObject({ message: "Valid url" }); // Partial
});
