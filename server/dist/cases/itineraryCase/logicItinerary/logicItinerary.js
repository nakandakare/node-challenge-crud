"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.editComment = exports.commentItinerary = exports.likeItinerary = void 0;
const itinerary_module_1 = require("../itinerary.module");
const itineraryRepository = __importStar(require("../../../repositories/itinerary.repository"));
const getMyComments_1 = require("../../../utils/getMyComments");
//Logica para favoritos de Itinerario
const likeItinerary = (req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: paramId } = req.params;
    const { _id: userId } = req.user;
    try {
        const itineraryToLike = yield itineraryRepository.getItineraryByOne({ "_id": paramId, "usersLike": userId });
        let filter = itineraryToLike ? '$pull' : '$push';
        let liked = itineraryToLike ? false : true;
        let itineraryLiked = yield itineraryRepository.findAndUpdateOneItinerary({ "_id": paramId }, { [filter]: { 'usersLike': userId } }, { new: true });
        let likesFromDb = parseInt(itineraryLiked.likes);
        let itineraryModified = yield itineraryRepository.findAndUpdateOneItinerary({ "_id": paramId }, { $set: { "likes": likesFromDb += liked ? 1 : -1 } }, { new: true });
        res.status(200).json({ success: true, response: { likes: itineraryModified === null || itineraryModified === void 0 ? void 0 : itineraryModified.likes, liked } });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.likeItinerary = likeItinerary;
//Logica para comentar en el Itinerario
const commentItinerary = (req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: paramId } = req.params;
    const { user } = req;
    const { text } = req.body;
    try {
        const updatedItinerary = yield itineraryRepository.findAndUpdateOneItinerary({ _id: paramId }, { "$push": { "comments": { text, userId: user._id, userName: user.firstName, userPic: user.userPic } } }, { new: true });
        let arrayOwnerCheck = getMyComments_1.getMyComments(updatedItinerary, user._id);
        res.status(200).json({ success: true, response: updatedItinerary === null || updatedItinerary === void 0 ? void 0 : updatedItinerary.comments, arrayOwnerCheck });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.commentItinerary = commentItinerary;
//Logica para editar el comentario en el Itinerario
const editComment = (req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: commentId } = req.params;
    const { text } = req.body;
    const { _id: userId } = req.user;
    try {
        const itineraryDB = yield itineraryRepository.getItineraryByOne({ "comments._id": commentId, "comments.userId": userId });
        if (!itineraryDB) {
            res.status(500).json({ message: `You can't edit this comment`, ok: false });
        }
        const updatedItinerary = yield itineraryRepository.findAndUpdateOneItinerary({ "comments._id": commentId }, { $set: { "comments.$.text": text } }, { new: true });
        res.status(200).json({ success: true, response: updatedItinerary.comments });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.editComment = editComment;
//Logica para borrar el comentario en el Itinerario
const deleteComment = (req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: commentId } = req.params;
    const { _id: userId } = req.user;
    try {
        const itineraryDB = yield itineraryRepository.getItineraryByOne({ "comments._id": commentId, "comments.userId": userId });
        if (!itineraryDB) {
            res.status(500).json({ message: `You can't edit this comment`, ok: false });
        }
        const updatedItinerary = yield itineraryRepository.findAndUpdateOneItinerary({ "comments._id": commentId }, { $pull: { "comments": { '_id': commentId } } }, { new: true });
        res.status(200).json({ success: true, response: updatedItinerary.comments });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.deleteComment = deleteComment;
//# sourceMappingURL=logicItinerary.js.map