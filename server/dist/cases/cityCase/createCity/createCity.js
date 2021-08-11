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
exports.createCity = void 0;
const city_module_1 = require("../city.module");
const cityRepository = __importStar(require("../../../repositories/city.repository"));
// Crea y guarda una nueva ciudad
const createCity = (req, res = city_module_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, country, img } = req.body;
    const newCity = new city_module_1.City({ name, country, img });
    //Verifica si la ciudad ya se encuentra en la base de datos (case insensitive)
    try {
        const foundCity = yield cityRepository.getOneCity({ name: name === null || name === void 0 ? void 0 : name.toLowerCase() });
        if (foundCity) {
            res.status(400).json({ message: `The city ${name} is already created`, ok: false });
        }
        else {
            const savedCity = yield newCity.save();
            res.json({ savedCity, ok: true });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message, ok: false });
    }
});
exports.createCity = createCity;
//# sourceMappingURL=createCity.js.map