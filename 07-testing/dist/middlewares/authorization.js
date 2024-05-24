"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorization(req, res, next) {
    // to get out of the way as quickly as possible!
    if (!req.headers || !req.headers["authorization"]) {
        res.statusCode = 403;
        return res.json({
            error: "Missing JWT token from the 'Authorization' header",
        });
    }
    next();
}
exports.default = authorization;
