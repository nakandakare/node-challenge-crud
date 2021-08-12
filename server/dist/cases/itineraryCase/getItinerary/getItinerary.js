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
exports.checkUser = exports.getByCityId = exports.getByCityName = exports.getAll = void 0;
const itinerary_module_1 = require("../itinerary.module");
const itineraryRepository = __importStar(require("../../../repositories/itinerary.repository"));
const cityRepository = __importStar(require("../../../repositories/city.repository"));
const getMyComments_1 = require("../../../utils/getMyComments");
/* obtener todos los itinerarios */
const getAll = (_req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itineraries = yield itineraryRepository.getAllItineraries();
        const count = yield itineraryRepository.countItineraries();
        if (!itineraries || itineraries.length <= 0) {
            return res.status(401).json({
                msg: "No itineraries found",
                ok: false,
            });
        }
        res.status(200).json({
            itineraries,
            total: count,
            ok: true,
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.getAll = getAll;
/* obtener itinerario por ciudad */
const getByCityName = (req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const cityName = req.params.city;
    try {
        const cityFound = yield cityRepository.getCityByOne({ name: cityName });
        const itinerariesByCity = yield itineraryRepository.getItinerariesByCityId(cityFound === null || cityFound === void 0 ? void 0 : cityFound._id);
        if (!itinerariesByCity) {
            return res.status(401).json({
                ok: false,
                msg: `There is no itinerary with city name: ${cityName}`,
            });
        }
        res.status(200).json({
            ok: true,
            itinerarios: itinerariesByCity,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error.msg,
        });
    }
});
exports.getByCityName = getByCityName;
/* obtener itinerario por id de ciudad */
const getByCityId = (req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const cityId = req.params.id;
    try {
        const cityFound = yield cityRepository.getCityByOne({ _id: cityId });
        const itinerariesByCity = yield itineraryRepository.getItinerariesByCityId(cityFound === null || cityFound === void 0 ? void 0 : cityFound._id);
        if (!itinerariesByCity) {
            return res.status(401).json({
                ok: false,
                msg: `There is no itinerary with city id: ${cityId}`,
            });
        }
        res.status(200).json({
            ok: true,
            response: itinerariesByCity,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error.msg,
        });
    }
});
exports.getByCityId = getByCityId;
//Obtener los datos del Usuario de Itinerario
const checkUser = (req, res = itinerary_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id: paramId } = req.params;
    const { user } = req;
    try {
        const itineraryDB = yield itineraryRepository.getItineraryByOne({ _id: paramId });
        if (!itineraryDB) {
            return res.status(400).json({ ok: false, msg: `No itinerary found.` });
        }
        let arrayOwnerCheck = getMyComments_1.getMyComments(itineraryDB, user._id);
        const likedChek = (_a = itineraryDB.usersLike) === null || _a === void 0 ? void 0 : _a.includes(user._id);
        res.status(200).json({ success: true, response: { arrayOwnerCheck, likedChek } });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.checkUser = checkUser;
//# sourceMappingURL=getItinerary.js.map