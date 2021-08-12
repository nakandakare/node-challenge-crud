"use strict";
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
exports.checkUser = void 0;
const user_module_1 = require("../user.module");
//Check de Usuario
const checkUser = (req, res = user_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ success: true, response: { user: req.user, param: req.params.id } });
});
exports.checkUser = checkUser;
//# sourceMappingURL=checkUser.js.map