"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.replaceUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const users = [];
function createUser(req, res, next) {
    const user = req.body; // id!!
    if (!user.location || !user.name) {
        return res
            .status(400)
            .json({ message: "You need to send the location and name" });
    }
    user.id = String(users.length + 1);
    users.push(user);
    res.status(201).json(user);
}
exports.createUser = createUser;
function getAllUsers(req, res, next) {
    return res.json(users);
}
exports.getAllUsers = getAllUsers;
function getUserById(req, res, next) {
    const user = users.find((user) => user.id === req.params.userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
}
exports.getUserById = getUserById;
function updateUser(req, res, next) {
    const userId = req.params.userId;
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    // ... spread operator
    users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), req.body);
    res.json(users[userIndex]);
}
exports.updateUser = updateUser;
function replaceUser(req, res, next) {
    const userId = req.params.userId;
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    const user = req.body;
    if (!user.location || !user.name) {
        return res
            .status(400)
            .json({ message: "You need to send the location and name" });
    }
    user.id = userId;
    users[userIndex] = user;
    res.json(user);
}
exports.replaceUser = replaceUser;
function deleteUser(req, res, next) {
    const userId = req.params.userId;
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
}
exports.deleteUser = deleteUser;
// export default { createUser };
