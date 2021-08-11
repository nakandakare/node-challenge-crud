"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.response = exports.Itinerary = void 0;
const express_1 = require("express");
Object.defineProperty(exports, "response", { enumerable: true, get: function () { return express_1.response; } });
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return express_1.Router; } });
const Itinerary_1 = __importDefault(require("../../database/models/Itinerary"));
exports.Itinerary = Itinerary_1.default;
//# sourceMappingURL=itinerary.module.js.map