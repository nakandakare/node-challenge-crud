"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const router = express_1.Router();
const itinerary_controller_1 = require("../itineraryCase/itinerary.controller");
router.get('/', itinerary_controller_1.get.getAll);
exports.default = router;
//# sourceMappingURL=itinerary.js.map