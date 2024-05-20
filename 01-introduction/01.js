"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, World!");
function thereWillBeAnError(n) {
    if (n === 0) {
        throw new Error("I'm an error!");
    }
    thereWillBeAnError(n - 1);
}
thereWillBeAnError(10);
