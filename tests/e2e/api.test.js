const request = require("supertest");
const { describe, it } = require("mocha");
const { expect } = require("chai");

const app = require("../../src/api");

describe("# API Suit Test", () => {
  describe("Route default", () => {
    it("should request the default page and return HTTP status code 200", async () => {
      await request(app).get("/").expect(200);
    });
  });

  describe("Route endpoint /team", () => {
    it("should request return HTTP status code 200", async () => {
      await request(app)
        .get("/team")
        .expect("Content-Type", /json/)
        .expect((response) => {
          expect(response.body.length).to.be.equal(3);
        })
        .expect(200);
    });
  });
});
