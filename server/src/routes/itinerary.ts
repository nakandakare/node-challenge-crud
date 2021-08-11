// @ts-nocheck
import { Router } from "express";
const router: Router = Router();

//Controllers
import { get } from "../cases/itineraryCase/itinerary.controller";

/*obtener itinerarios*/
router.get('/', get.getAll);

export default router;