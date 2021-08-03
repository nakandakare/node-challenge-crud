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
exports.deleteCity = exports.updateCity = exports.findOneCity = exports.findAllCities = exports.createCity = void 0;
const City_1 = __importDefault(require("../models/City"));
// Create and Save a new City
const createCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, country, img } = req.body;
    const newCity = new City_1.default({
        name,
        country,
        img,
    });
    //Verifica si la ciudad ya se encuentra en la base de datos (case insensitive)
    try {
        const foundCity = yield City_1.default.findOne({ name: name.toLowerCase() });
        if (foundCity) {
            res.json({ message: "This city has already been saved" });
        }
        else {
            const savedCity = yield newCity.save();
            res.json(savedCity);
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.createCity = createCity;
// Retrieve all Cities from the database.
const findAllCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cities = yield City_1.default.find({});
        res.json(cities);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.findAllCities = findAllCities;
// Find a single City with name
const findOneCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const foundCity = yield City_1.default.findOne({ name: name.toLowerCase() });
        res.json({ foundCity });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.findOneCity = findOneCity;
// Update a City by the id in the request
const updateCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateCity = updateCity;
// Delete a City with the specified id in the request
const deleteCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteCity = deleteCity;
//# sourceMappingURL=cities.controllers.js.map