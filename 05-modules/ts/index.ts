import fs from "node:fs";
import addFunction, { add as myAddFunction } from "./utils";

console.log(addFunction(1, 2));
console.log(myAddFunction(1, 2));

console.log(__dirname);
console.log(__filename);
