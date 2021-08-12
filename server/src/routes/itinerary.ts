// @ts-nocheck
import { Router } from "express";
const router: Router = Router();

//passport
import passport from 'passport';

//Controladores
import { get, create, logic } from "../cases/itineraryCase/itinerary.controller";

/*obtener itinerarios*/
router.get('/itineraries/all', get.getAll);
router.get('/itineraries/city/:city', get.getByCityName);
router.get('/itineraries/:id', get.getByCityId);

/*obtener datos especificos del itinerario */
router.get('/checkuser/:id', passport.authenticate('jwt', {session: false}), get.checkUser);

/* La logica del itinerario ( like, comment ) */
router.get('/like/:id', passport.authenticate('jwt', {session: false}), logic.likeItinerary);
router.post('/comments/:id', passport.authenticate('jwt', {session: false}), logic.commentItinerary);
router.put('/comment/:id', passport.authenticate('jwt', {session: false}), logic.editComment);
router.delete('/comment/:id', passport.authenticate('jwt', {session: false}), logic.deleteComment);

/* crear itinerario */
router.post('/', create.createItinerary);

export default router;