import { Router } from "express";
const router: Router = Router();

import {
  createCity,
  findAllCities,
  findOneCity,
  updateCity,
  deleteCity
} from "../controllers/cities.controllers";

router.get("/all", findAllCities);
router.post("/find", findOneCity);
router.post("/create", createCity);
router.get("/4", updateCity);
router.get("/5", deleteCity);

export default router;
