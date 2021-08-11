"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.response = exports.User = void 0;
const express_1 = require("express");
Object.defineProperty(exports, "response", { enumerable: true, get: function () { return express_1.response; } });
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return express_1.Router; } });
const User_1 = __importDefault(require("../database/models/User"));
exports.User = User_1.default;
//# sourceMappingURL=user.module.js.map