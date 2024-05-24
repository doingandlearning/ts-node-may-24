"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks.controller");
const router = (0, express_1.Router)();
router.get("/", tasks_controller_1.getAllTasks);
router.post("/", tasks_controller_1.createTask);
router.get("/:id", tasks_controller_1.getTaskById);
router.put("/:id", tasks_controller_1.updateTask); // Use PUT for full updates
router.patch("/:id", tasks_controller_1.updateTask); // Use PATCH for partial updates
router.delete("/:id", tasks_controller_1.deleteTask);
exports.default = router;
