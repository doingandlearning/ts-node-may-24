"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("timers/promises");
function store(value) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Buffer.isBuffer(value) === false) {
            throw Error("input must be a buffer");
        }
        yield (0, promises_1.setTimeout)(300);
        const id = Math.random().toString(36).split(".")[1].slice(0, 4);
        return { id };
    });
}
exports.default = store;
