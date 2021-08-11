"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const router = express_1.Router();
//Joi
const cities_1 = __importDefault(require("../joiSchemas/cities"));
const validateData_1 = __importDefault(require("../middleware/validateData"));
//Controllers
const city_controllers_1 = require("../cases/cityCase/city.controllers");
/* obtener ciudades */
router.get("/cities", city_controllers_1.get.getAllCities);
router.get("/city/:id", city_controllers_1.get.getCitiesById);
router.get("/city", city_controllers_1.get.getCityByQuery);
/*crear una ciudad*/
router.post("/", validateData_1.default(cities_1.default), city_controllers_1.create.createCity);
exports.default = router;
//# sourceMappingURL=cities.js.map