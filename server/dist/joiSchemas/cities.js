"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const citySchema = joi_1.default.object({
    name: joi_1.default.string().required().trim(),
    country: joi_1.default.string().required().trim(),
    img: joi_1.default.string().required().trim(),
});
exports.default = citySchema;
//# sourceMappingURL=cities.js.map