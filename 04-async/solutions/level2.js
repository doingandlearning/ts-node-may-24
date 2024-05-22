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
// 2. Create an async function named fetchUserData
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 3. Use fetch to request user data
            const userResponse = yield fetch("https://jsonplaceholder.typicode.com/users/1");
            // 4. Convert the response to JSON format and cast it to the User type
            const userData = yield userResponse.json();
            // 5. Print the user data to the console
            console.log("User Data:", userData);
            // 6. Extract the user ID from the user data
            const userId = userData.id;
            // 7. Use the user ID to fetch the user's posts
            const postsResponse = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
            // 8. Convert the response to JSON format and cast it to the Post[] type
            const postsData = yield postsResponse.json();
            // 9. Print the posts data to the console
            console.log("Posts Data:", postsData);
        }
        catch (error) {
            // 10. Handle any errors
            console.error("Error fetching data:", error);
        }
    });
}
// 11. Call the fetchUserData function
fetchUserData();
//# sourceMappingURL=level2.js.map