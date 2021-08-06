"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cities_1 = __importDefault(require("./routes/cities"));
const morgan_1 = __importDefault(require("morgan"));
//database
require("./database-connection");
const app = express_1.default();
//settings
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json()); // Para parsear los requests con JSON
app.use(cors_1.default());
//middlewares
app.use(morgan_1.default('dev'));
// routes
app.use('/cities', cities_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("El servidor se está ejecutando en el port: " + port);
});
//# sourceMappingURL=server.js.map