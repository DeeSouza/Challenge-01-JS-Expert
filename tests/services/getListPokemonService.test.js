const sinon = require("sinon");
const { expect } = require("chai");
const { describe, it } = require("mocha");

const GetListPokemonService = require("../../src/services/getListPokemonService");
const {
  teamRepositoryMock,
  mocks,
} = require("../repository/teamRepositoryMock");

describe("# Get List Pokemon Service", () => {
  it("should return three pokemons shuffle", async () => {
    const getListPokemon = new GetListPokemonService(teamRepositoryMock);
    const stub = sinon.stub(getListPokemon, getListPokemon.execute.name);

    stub.resolves(mocks.mockData);
    const result = await getListPokemon.getPokemons();

    const expected = [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    ];

    expect(result).to.have.deep.members(expected);
  });

  it("should return three pokemons execute function", async () => {
    const getPokemons = new GetListPokemonService(teamRepositoryMock);
    const result = await getPokemons.execute();

    const expected = mocks.mockData;

    expect(result).to.have.equal(expected);
  });
});
