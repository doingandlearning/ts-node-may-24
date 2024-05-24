"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uppercase(str) {
    if (typeof str !== "string")
        throw Error("input must be a string");
    return str.toUpperCase();
}
exports.default = uppercase;
