"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const router = express_1.Router();
//passport
const passport_1 = __importDefault(require("passport"));
//Controladores
const itinerary_controller_1 = require("../cases/itineraryCase/itinerary.controller");
/*obtener itinerarios*/
router.get('/itineraries/all', itinerary_controller_1.get.getAll);
router.get('/itineraries/city/:city', itinerary_controller_1.get.getByCityName);
router.get('/itineraries/:id', itinerary_controller_1.get.getByCityId);
/*obtener datos especificos del itinerario */
router.get('/checkuser/:id', passport_1.default.authenticate('jwt', { session: false }), itinerary_controller_1.get.checkUser);
/* La logica del itinerario ( like, comment ) */
router.get('/like/:id', passport_1.default.authenticate('jwt', { session: false }), itinerary_controller_1.logic.likeItinerary);
router.post('/comments/:id', passport_1.default.authenticate('jwt', { session: false }), itinerary_controller_1.logic.commentItinerary);
router.put('/comment/:id', passport_1.default.authenticate('jwt', { session: false }), itinerary_controller_1.logic.editComment);
router.delete('/comment/:id', passport_1.default.authenticate('jwt', { session: false }), itinerary_controller_1.logic.deleteComment);
/* crear itinerario */
router.post('/', itinerary_controller_1.create.createItinerary);
exports.default = router;
//# sourceMappingURL=itinerary.js.map