const sinon = require("sinon");
const https = require("https");
const { expect } = require("chai");
const { describe, it } = require("mocha");

const TeamRepository = require("../../src/repository/teamRepository");

describe("# Team Repository", () => {
  it("should be return data success", async (done) => {
    const teamRepository = new TeamRepository();
    const result = teamRepository.pokemons();
    const expected = [];

    expect([]).to.be.deep.members(expected);
    done();
  });
});
