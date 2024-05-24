"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw new Error("You need to pass in numbers.");
    }
    return a + b;
}
exports.default = add;
