console.log("Hello, World!");

function thereWillBeAnError(n: number) {
  if (n === 0) {
    throw new Error("I'm an error!");
  }
  thereWillBeAnError(n - 1);
}

thereWillBeAnError(10);

const arr = [1,2,3,4]
arr.

export {};
