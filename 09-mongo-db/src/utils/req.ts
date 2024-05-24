export async function fakeRequest(url: string) {
  // Your own timeout Promise => compatible with Jest Fake timers
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(""), 3000);
  });

  if (url === "http://error.com") {
    throw new Error("network error");
  }
  return { message: "Valid url", status: 200 };
}
