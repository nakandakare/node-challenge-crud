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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
let testServer;
beforeAll(() => {
    testServer = app_1.default.listen(4000);
});
describe("Get /api/cities", () => {
    it("Return all cities", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(app_1.default).get("/api/cities");
        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
        expect(response.body.total).toBe(10);
        expect(response.body).not.toBeNull();
        expect(Array.isArray(response.body.response)).toBe(true);
    }));
});
afterAll((done) => {
    testServer.close(done);
});
//# sourceMappingURL=city.test.js.map