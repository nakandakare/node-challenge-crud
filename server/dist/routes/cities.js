"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const cities_controllers_1 = require("../controllers/cities.controllers");
router.get("/all", cities_controllers_1.findAllCities);
router.post("/find", cities_controllers_1.findOneCity);
router.post("/create", cities_controllers_1.createCity);
router.get("/4", cities_controllers_1.updateCity);
router.get("/5", cities_controllers_1.deleteCity);
exports.default = router;
//# sourceMappingURL=cities.js.map