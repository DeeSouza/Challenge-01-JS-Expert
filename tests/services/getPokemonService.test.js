const sinon = require("sinon");
const { expect } = require("chai");
const { describe, it } = require("mocha");

const GetPokemonService = require("../../src/services/getPokemonService");
const mockData = require("../mocks/pokemonInfo.json");

describe("# Get Pokemon Service", () => {
  it("should return info of three pokemons random", async () => {
    const getPokemon = new GetPokemonService();
    const stub = sinon.stub(getPokemon, getPokemon.execute.name);

    const pokemons = [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    ];

    pokemons.map((pokemon) =>
      stub.withArgs(pokemon.url).resolves(mockData[pokemon.name])
    );

    const result = await getPokemon.getInfoPokemons(pokemons);

    const expected = [
      { name: "bulbasaur", moves: ["razor-wind", "swords-dance", "cut"] },
      { name: "ivysaur", moves: ["swords-dance", "cut", "bind"] },
      { name: "venusaur", moves: ["swords-dance", "cut", "bind"] },
    ];

    expect(result).to.have.deep.members(expected);
  });
});
