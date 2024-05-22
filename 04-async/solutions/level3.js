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
// Step-by-step implementation guide for students
// 1. Define the Todo and User interfaces if not already defined
// 2. Create an async function named fetchConcurrentData
function fetchConcurrentData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 3. Use Promise.all to perform fetch requests concurrently
            const [todosResponse, usersResponse] = yield Promise.all([
                fetch("https://jsonplaceholder.typicode.com/todos"),
                fetch("https://jsonplaceholder.typicode.com/users"),
            ]);
            // 4. Convert both responses to JSON format and cast them to the appropriate types
            const todos = yield todosResponse.json();
            const users = yield usersResponse.json();
            // 5. Print the todos data to the console
            console.log("Todos:", todos);
            // 6. Print the users data to the console
            console.log("Users:", users);
        }
        catch (error) {
            // 7. Handle any errors
            console.error("Error fetching data:", error);
        }
    });
}
// 8. Call the fetchConcurrentData function
fetchConcurrentData();
//# sourceMappingURL=level3.js.map