// @ts-nocheck
import { Router } from "express";
const router: Router = Router();

//passport
import passport from 'passport';

//Controladores
import { get, create, getItineraryData } from "../cases/itineraryCase/itinerary.controller";

/*obtener itinerarios*/
router.get('/itineraries/all', get.getAll);
router.get('/itineraries/city/:city', get.getByCityName);
router.get('/itineraries/:id', get.getByCityId);

/*obtener datos especificos del itinerario */
router.get('/checkuser/:id', passport.authenticate('jwt', {session: false}), getItineraryData.checkUser);
router.get('/like/:id', passport.authenticate('jwt', {session: false}), getItineraryData.likeItinerary);

/* crear itinerario */
router.post('/', create.createItinerary);

export default router;