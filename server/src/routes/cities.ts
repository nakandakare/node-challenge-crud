// @ts-nocheck
import { Router } from "express";
const router: Router = Router();

//Joi
import cityJoiSchema from "../joiSchemas/cities";
import validateData from "../middleware/validateData";

//Controllers
import { create, get } from "../cases/cityCase/city.controllers";

/* obtener ciudades */
router.get("/cities", get.getAllCities);
router.get("/city/:id", get.getCitiesById);
router.get("/city", get.getCityByQuery);

/*crear una ciudad*/
router.post("/", validateData(cityJoiSchema) ,create.createCity);

export default router;
