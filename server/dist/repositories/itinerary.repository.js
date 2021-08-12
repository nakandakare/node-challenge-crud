"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneItinerary = exports.getItineraryByOne = exports.getItinerariesByCityId = exports.countItineraries = exports.getAllItineraries = void 0;
const Itinerary_1 = __importDefault(require("../database/models/Itinerary"));
const getAllItineraries = () => __awaiter(void 0, void 0, void 0, function* () { return yield Itinerary_1.default.find({}); });
exports.getAllItineraries = getAllItineraries;
const countItineraries = () => __awaiter(void 0, void 0, void 0, function* () { return yield Itinerary_1.default.countDocuments(); });
exports.countItineraries = countItineraries;
const getItinerariesByCityId = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Itinerary_1.default.find({ cityId: id }); });
exports.getItinerariesByCityId = getItinerariesByCityId;
const getItineraryByOne = (value) => __awaiter(void 0, void 0, void 0, function* () { return yield Itinerary_1.default.findOne(value); });
exports.getItineraryByOne = getItineraryByOne;
const updateOneItinerary = (filter, update) => __awaiter(void 0, void 0, void 0, function* () { return yield Itinerary_1.default.updateOne(filter, update); });
exports.updateOneItinerary = updateOneItinerary;
//# sourceMappingURL=itinerary.repository.js.map