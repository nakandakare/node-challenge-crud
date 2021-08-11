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
const passport_jwt_1 = require("passport-jwt");
const user_module_1 = require("../cases/userCase/user.module");
const opt = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secretOrKey || "",
};
exports.default = new passport_jwt_1.Strategy(opt, (jwt_payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_module_1.User.findById(jwt_payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }
    catch (err) {
        console.log(err);
        return done(err);
    }
}));
//# sourceMappingURL=passportJWT.js.map