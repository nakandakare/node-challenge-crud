"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const router = express_1.Router();
const city_controllers_1 = require("../cityCase/city.controllers");
/* obtener ciudades */
router.get("/cities", city_controllers_1.get.getAllCities);
router.get("/city/:id", city_controllers_1.get.getCitiesById);
router.get("/city", city_controllers_1.get.getCityByQuery);
/*crear una ciudad*/
router.post("/", city_controllers_1.create.createCity);
exports.default = router;
//# sourceMappingURL=cities.js.map