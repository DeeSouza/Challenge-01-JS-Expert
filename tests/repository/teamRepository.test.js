const sinon = require("sinon");
const https = require("https");
const { expect } = require("chai");
const { describe, it } = require("mocha");

const TeamRepository = require("../../src/repository/teamRepository");

describe("# Team Repository", () => {
  describe("function pokemons", () => {
    it("should be return data success", async (done) => {
      const teamRepository = new TeamRepository();
      const stub = sinon.stub(https, https.get.name);
      done();

      stub.resolves([]);
      stub.rejects("error");

      const result = await teamRepository.pokemons();
      const expected = [];

      expect(result).to.be.deep.members(expected);
    });
  });
});
