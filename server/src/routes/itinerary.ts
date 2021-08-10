// @ts-nocheck
import { Router } from "express";
const router: Router = Router();

import { get } from "../itineraryCase/itinerary.controller";

router.get('/', get.getAll);

export default router;