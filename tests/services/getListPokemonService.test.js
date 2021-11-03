const sinon = require("sinon");
const { expect } = require("chai");
const { describe, it } = require("mocha");

const mockData = require("../mocks/pokemon.json");
const GetListPokemonService = require("../../src/services/getListPokemonService");

describe("# Get List Pokemon Service", () => {
  describe("function getPokemons", () => {
    it("should return three pokemons shuffle", async () => {
      const getListPokemon = new GetListPokemonService();
      const stub = sinon.stub(getListPokemon, getListPokemon.execute.name);

      stub.resolves(mockData);
      const result = await getListPokemon.getPokemons();

      const expected = [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
        { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
      ];

      expect(result).to.have.deep.members(expected);
    });
  });
});
