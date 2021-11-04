const sinon = require("sinon");
const { expect } = require("chai");
const { describe, it } = require("mocha");

const {
  teamRepositoryMock,
  urls,
  mocks,
} = require("../repository/teamRepositoryMock");

describe("# Team Repository", () => {
  let teamRepository = {};
  const { urlPokemon, urlPokemonInfo1, urlPokemonInfo2, urlPokemonInfo3 } =
    urls;
  const {
    mockDataInfo: { venusaur, ivysaur, bulbasaur },
  } = mocks;

  before(() => {
    teamRepository = teamRepositoryMock;
  });

  it("should return a list pokemons when function makeRequest is called", async () => {
    const result = await teamRepository.makeRequest(urlPokemon);

    expect(result).to.be.equal(mocks.mockData);
  });

  it("should return a list pokemons when function pokemons is called", async () => {
    const result = await teamRepository.getAllPokemons(urlPokemon);

    expect(result).to.be.equal(mocks.mockData);
  });

  it("should return a pokemon when function pokemon is called", async () => {
    const resultPoke1 = await teamRepository.findPokemonByUrl(urlPokemonInfo1);
    const resultPoke2 = await teamRepository.findPokemonByUrl(urlPokemonInfo2);
    const resultPoke3 = await teamRepository.findPokemonByUrl(urlPokemonInfo3);

    expect(resultPoke1).to.be.equal(bulbasaur);
    expect(resultPoke2).to.be.equal(ivysaur);
    expect(resultPoke3).to.be.equal(venusaur);
  });
});
