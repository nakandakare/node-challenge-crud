"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().trim().messages({
        "string.empty": "Email is required",
        "string.email": "The email entered is not valid",
        "string.required": "The email field is mandatory",
    }),
    password: joi_1.default.string().required().trim().messages({
        "string.empty": "Password is required",
        "string.required": "The password field is mandatory",
    }),
});
exports.default = loginSchema;
//# sourceMappingURL=login.js.map