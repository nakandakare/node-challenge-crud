"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItinerarySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    activities: {
        type: [{ name: String, img: String }],
        required: false,
    },
    authorName: {
        type: String,
        required: true,
    },
    authorPic: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    duration: {
        type: Number,
        min: 1,
        required: true,
    },
    likes: {
        type: String,
        default: 0,
    },
    hashtags: {
        type: [String],
    },
    comments: {
        type: [{ userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }, text: String, userName: String, userPic: String }],
    },
    usersLike: {
        type: [String],
    },
    cityId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "City",
        required: true
    }
});
exports.default = mongoose_1.model('Itinerary', ItinerarySchema);
//# sourceMappingURL=Itinerary.js.map