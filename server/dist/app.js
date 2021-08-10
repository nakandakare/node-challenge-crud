"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cities_1 = __importDefault(require("./routes/cities"));
const itinerary_1 = __importDefault(require("./routes/itinerary"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
//database
require("./database-connection");
const app = express_1.default();
//settings
app.set('port', 4000 || process.env.PORT);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json()); // Para parsear los requests con JSON
app.use(cors_1.default());
//middlewares
app.use(morgan_1.default('dev'));
// routes
app.use('/api', cities_1.default);
app.use('/itineraries', itinerary_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map