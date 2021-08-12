"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const router = express_1.Router();
//Joi
const register_1 = __importDefault(require("../joiSchemas/register"));
const login_1 = __importDefault(require("../joiSchemas/login"));
const validateData_1 = __importDefault(require("../middleware/validateData"));
const passport_1 = __importDefault(require("passport"));
//Controllers
const user_controller_1 = require("../cases/userCase/user.controller");
/* obtener usuarios */
router.get("/all", passport_1.default.authenticate('jwt', { session: false }), user_controller_1.get.getAllUsers);
/* registrar usuario */
router.post("/signup", validateData_1.default(register_1.default), user_controller_1.register.registerUser);
/* login */
router.post("/signin", validateData_1.default(login_1.default), user_controller_1.login.loginUser);
/* login with token */
router.get("/signinls", passport_1.default.authenticate('jwt', { session: false }), user_controller_1.login.loginByToken);
exports.default = router;
//# sourceMappingURL=user.js.map