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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_module_1 = require("../user.module");
const userRespository = __importStar(require("../../repositories/user.repository"));
const getAllUsers = (_req, res = user_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersDB = yield userRespository.getAllUsers();
        const count = yield userRespository.countUsers();
        if (!usersDB || usersDB.length <= 0) {
            return res.status(401).json({
                msg: "No itineraries found",
                ok: false,
            });
        }
        res.status(200).json({
            total: count,
            ok: true,
            usersDB,
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=getUser.js.map