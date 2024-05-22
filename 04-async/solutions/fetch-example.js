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
function getPeople() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch("https://swapi.dev/api/people"); // This is a response object
            console.log(data);
            const people = yield data.json(); //
            return people.results;
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        // const people: Person[] = await getPeople();
    });
}
//# sourceMappingURL=fetch-example.js.map