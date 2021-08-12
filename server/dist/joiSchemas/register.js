"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const registerSchema = joi_1.default.object()
    .options({ abortEarly: false })
    .keys({
    firstName: joi_1.default.string()
        .required()
        .trim()
        .min(2)
        .messages({
        "string.empty": "First name is required",
        "string.min": "First name length must be at least 2 characters long",
        "string.required": "The first name field is mandatory"
    }),
    lastName: joi_1.default.string().required().trim().min(2).messages({
        "string.empty": "Last name is required",
        "string.min": "Last name length must be at least 2 characters long",
        "string.required": "The last name field is mandatory"
    }),
    email: joi_1.default.string().email().required().trim().messages({
        "string.empty": "Email is required",
        "string.email": "The email entered is not valid",
        "string.required": "The email field is mandatory"
    }),
    password: joi_1.default.string().min(4).required().trim().messages({
        "string.empty": "Password is required",
        "string.min": "Password length must be at least 4 characters long",
        "string.required": "The password field is mandatory"
    }),
    userPic: joi_1.default.string().required().trim().messages({
        "string.empty": "User pic is required",
        "string.required": "The user pic field is mandatory"
    }),
    country: joi_1.default.string().required().trim().messages({
        "string.empty": "Country is required",
        "string.required": "The country field is mandatory"
    }),
});
exports.default = registerSchema;
//# sourceMappingURL=register.js.map