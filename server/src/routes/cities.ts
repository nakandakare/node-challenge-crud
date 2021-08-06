// @ts-nocheck
import { Router } from "express";
const router: Router = Router();

import { create, get } from "../cityCase/city.controllers";

/* obtener ciudades */
router.get("/cities", get.getAllCities);
router.get("/city/:id", get.getCitiesById);
router.get("/city", get.getCityByQuery);

/*crear una ciudad*/
router.post("/", create.createCity);

export default router;
