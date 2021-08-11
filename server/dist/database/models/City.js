"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    country: {
        type: String,
        required: [true, 'Country is required'],
    },
    img: {
        type: String,
        required: [true, 'Image is required'],
    },
});
exports.default = mongoose_1.model('City', citySchema);
//# sourceMappingURL=City.js.map