"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const keys_1 = require("./keys");
mongoose_1.default
    .connect(keys_1.KEYS.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then((db) => console.log('Conexión a MongoDB establecida'))
    .catch(err => console.log(err));
//# sourceMappingURL=database-connection.js.map