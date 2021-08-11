"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const user_module_1 = require("../user.module");
const userRespository = __importStar(require("../../repositories/user.repository"));
const comparePasswords_1 = __importDefault(require("../../utils/comparePasswords"));
const generarJWT_1 = __importDefault(require("../../utils/generarJWT"));
const loginUser = (req, res = user_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //Verifica si la cuenta ya se encuentra en la base de datos.
    try {
        const foundUser = yield userRespository.getUserByMail(email);
        if (!foundUser) {
            res
                .status(400)
                .json({
                message: `User or password is invalid, please try again.`,
                ok: false,
            });
        }
        const validPassword = yield comparePasswords_1.default(password, foundUser === null || foundUser === void 0 ? void 0 : foundUser.password);
        if (!validPassword) {
            res
                .status(400)
                .json({
                message: `User or password is invalid, please try again.`,
                ok: false,
            });
        }
        const token = yield generarJWT_1.default(foundUser === null || foundUser === void 0 ? void 0 : foundUser.id, foundUser === null || foundUser === void 0 ? void 0 : foundUser.firstName, foundUser === null || foundUser === void 0 ? void 0 : foundUser.userPic);
        res.status(200).json({ success: true, response: { token, firstName: foundUser === null || foundUser === void 0 ? void 0 : foundUser.firstName, userPic: foundUser === null || foundUser === void 0 ? void 0 : foundUser.userPic } });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=loginUser.js.map