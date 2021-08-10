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
exports.countCities = exports.getCitiesByQueries = exports.getOneCitiesById = exports.getOneCity = exports.getAllCities = void 0;
const City_1 = __importDefault(require("../database/models/City"));
const getAllCities = () => __awaiter(void 0, void 0, void 0, function* () { return yield City_1.default.find(); });
exports.getAllCities = getAllCities;
const getOneCity = (queries) => __awaiter(void 0, void 0, void 0, function* () { return yield City_1.default.findOne(queries); });
exports.getOneCity = getOneCity;
const getOneCitiesById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield City_1.default.findById(id); });
exports.getOneCitiesById = getOneCitiesById;
const getCitiesByQueries = (queries) => __awaiter(void 0, void 0, void 0, function* () { return yield City_1.default.find(queries); });
exports.getCitiesByQueries = getCitiesByQueries;
const countCities = () => __awaiter(void 0, void 0, void 0, function* () { return yield City_1.default.countDocuments(); });
exports.countCities = countCities;
//# sourceMappingURL=city.repository.js.map