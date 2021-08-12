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
exports.likeItinerary = void 0;
const itinerary_module_1 = require("../itinerary.module");
const itineraryRepository = __importStar(require("../../../repositories/itinerary.repository"));
//Logica para favoritos de Itinerario
const likeItinerary = (req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { id: paramId } = req.params;
        const { user } = req;
        let alreadyLiked = false;
        let liked = false;
        let likes = 0;
        const itineraryDB = yield itineraryRepository.getItineraryByOne({ _id: paramId });
        if (!itineraryDB) {
            return res.status(400).json({ ok: false, msg: `No itinerary found.` });
        }
        alreadyLiked = (_a = itineraryDB.usersLike) === null || _a === void 0 ? void 0 : _a.includes(user._id);
        likes = ((_b = itineraryDB.usersLike) === null || _b === void 0 ? void 0 : _b.length) || 0;
        //REFACTOR THIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIS
        if (alreadyLiked) {
            yield itineraryRepository.updateOneItinerary({ _id: paramId }, { "$pull": { "usersLike": user._id } });
            liked = false;
            yield itineraryRepository.updateOneItinerary({ _id: paramId }, { "$set": { "likes": likes - 1 } });
            likes -= 1;
        }
        else {
            yield itineraryRepository.updateOneItinerary({ _id: paramId }, { "$push": { "usersLike": user._id } });
            liked = true;
            yield itineraryRepository.updateOneItinerary({ _id: paramId }, { "$set": { "likes": likes + 1 } });
            likes += 1;
        }
        res.status(200).json({ success: true, response: { likes, liked } });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.likeItinerary = likeItinerary;
//# sourceMappingURL=likeItinerary.js.map