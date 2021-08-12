"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const itinerarySchema = joi_1.default.object({
    title: joi_1.default.string().required().trim(),
    img: joi_1.default.string().required().trim(),
    authorName: joi_1.default.string().required().trim(),
    authorPic: joi_1.default.string().required().trim(),
    price: joi_1.default.number().min(0).max(5).required(),
    duration: joi_1.default.number().required(),
});
exports.default = itinerarySchema;
//# sourceMappingURL=itinerary.js.map