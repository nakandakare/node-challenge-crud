"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.response = exports.City = void 0;
const express_1 = require("express");
Object.defineProperty(exports, "response", { enumerable: true, get: function () { return express_1.response; } });
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return express_1.Router; } });
const City_1 = __importDefault(require("../../database/models/City"));
exports.City = City_1.default;
//# sourceMappingURL=city.module.js.map