"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var hostname = "127.0.0.1";
var port = 3000;
var server = http_1.default.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
