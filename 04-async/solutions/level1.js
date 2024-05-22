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
// 2. Create an async function named fetchData
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 3. Use fetch to request data
            const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
            // 4. Convert the response to JSON format and cast it to the Todo type
            const data = yield response.json();
            debugger;
            // 5. Print the data to the console
            console.log(data);
        }
        catch (error) {
            // 6. Handle any errors
            console.error("Error fetching data:", error);
        }
    });
}
// 7. Call the fetchData function
fetchData();
//# sourceMappingURL=level1.js.map