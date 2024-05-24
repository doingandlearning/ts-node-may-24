import { setTimeout } from "timers/promises";

export async function fakeRequest(url: string) {
  await setTimeout(100);
  if (url === "http://error.com") {
    throw new Error("network error");
  }
  return { message: "Valid url" };
}
