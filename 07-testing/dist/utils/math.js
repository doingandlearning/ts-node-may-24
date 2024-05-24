"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments should be numbers");
    }
    return a + b;
}
exports.add = add;
