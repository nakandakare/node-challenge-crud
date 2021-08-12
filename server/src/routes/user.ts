// @ts-nocheck
import { Router } from "express";
const router: Router = Router();

//Joi
import registerSchema from '../joiSchemas/register';
import loginSchema from "../joiSchemas/login";
import validateData from '../middleware/validateData';

import passport from 'passport';

//Controllers
import { get, login, register } from "../cases/userCase/user.controller";

/* obtener usuarios */
router.get("/all", passport.authenticate('jwt', {session: false}), get.getAllUsers);

/* registrar usuario */
router.post("/signup", validateData(registerSchema), register.registerUser);

/* login */
router.post("/signin", validateData(loginSchema), login.loginUser);

/* login with token */
router.get("/signinls", passport.authenticate('jwt', {session: false}), login.loginByToken);

export default router;
