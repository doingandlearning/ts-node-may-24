"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const tasks_routes_1 = __importDefault(require("./routes/tasks.routes"));
// Instaniate the app
const app = (0, express_1.default)();
// Add any global middleware
app.use(express_1.default.json());
// Add routers and routes
app.use("/api/v1/users", users_routes_1.default);
app.use("/api/v1/tasks", tasks_routes_1.default);
app.get("/", (req, res, next) => {
    res.json({ message: "Hello world" });
});
exports.default = app;
