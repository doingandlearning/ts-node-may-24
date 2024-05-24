"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function store(value, cb) {
    if (Buffer.isBuffer(value) === false) {
        cb(Error("input must be a buffer"));
        return;
    }
    setTimeout(() => {
        const id = Math.random().toString(36).split(".")[1].slice(0, 4);
        cb(null, { id });
    }, 300);
}
exports.default = store;
