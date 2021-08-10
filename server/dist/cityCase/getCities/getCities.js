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
exports.getCityByQuery = exports.getCitiesById = exports.getAllCities = void 0;
const city_module_1 = require("../city.module");
const cityRepository = __importStar(require("../../repositories/city.repository"));
// Obtener todas las ciudades
const getAllCities = (_req, res = city_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cities = yield cityRepository.getAllCities();
        const count = yield cityRepository.countCities();
        if (!cities) {
            return res.status(401).json({
                message: "Error fetching cities",
                ok: false
            });
        }
        res.status(200).json({ total: count, response: cities, ok: true });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.getAllCities = getAllCities;
// Obtener una ciudad por parametro
const getCitiesById = (req, res = city_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const foundCity = yield cityRepository.getOneCitiesById(id);
        const count = yield cityRepository.countCities();
        if (!foundCity) {
            res.status(400).json({ message: "Error fetching city", ok: false });
        }
        res.status(200).json({ total: count, foundCity, ok: true });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.getCitiesById = getCitiesById;
const getCityByQuery = (req, res = city_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, country, img } = req.query;
    //Se puede obtener una ciudad con multiples queries.
    try {
        const cities = yield cityRepository.getCitiesByQueries({
            $or: [{ name }, { country }, { img }],
        });
        const count = yield cityRepository.countCities();
        if (!cities) {
            return res.status(400).json({ message: "Error while fetching cities", ok: false });
        }
        return res.status(200).json({ total: count, cities, count, ok: true });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.getCityByQuery = getCityByQuery;
//# sourceMappingURL=getCities.js.map