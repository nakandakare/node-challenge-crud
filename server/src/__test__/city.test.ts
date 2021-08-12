import app from "../app";
import request from "supertest";

let testServer: any;
beforeAll(() => {
  testServer = app.listen(4000);
});

afterAll((done) => {
  testServer.close(done);
});

describe("Get /api/cities", () => {
  it("Return all cities", async () => {
    const response = await request(app).get("/api/cities");
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.total).toBe(10);
    expect(response.body).not.toBeNull();
    expect(Array.isArray(response.body.response)).toBe(true);
  });
});