const assert = require("assert");
const request = require("supertest");
const { describe, it } = require("mocha");

const app = require("../../src/api");

describe("API Suit Test", () => {
  describe("Route default", () => {
    it("should request the default page and return HTTP status code 200", async () => {
      const response = await request(app).get("/").expect(200);

      assert.deepStrictEqual(response.text, "PokeAPI Default Page");
    });
  });

  describe("Route endpoint /team", () => {
    it("should request return HTTP status code 200", async (done) => {
      await request(app).get("/team").expect(200, done());
    });
  });
});
