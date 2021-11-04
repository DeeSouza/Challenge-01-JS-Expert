const sinon = require("sinon");

const TeamRepository = require("../../src/repository/teamRepository");

const mocks = {
  mockData: require("../mocks/pokemon.json"),
  mockDataInfo: require("../mocks/pokemonInfo.json"),
};

const urls = {
  urlPokemon: "https://pokeapi.co/api/v2/pokemon",
  urlPokemonInfo1: "https://pokeapi.co/api/v2/pokemon/1",
  urlPokemonInfo2: "https://pokeapi.co/api/v2/pokemon/2",
  urlPokemonInfo3: "https://pokeapi.co/api/v2/pokemon/3",
};

const teamRepositoryMock = new TeamRepository();

const stub = sinon.stub(
  teamRepositoryMock,
  teamRepositoryMock.makeRequest.name
);

const {
  mockData,
  mockDataInfo: { bulbasaur, ivysaur, venusaur },
} = mocks;

stub.withArgs(urls.urlPokemon).resolves(mockData);
stub.withArgs(urls.urlPokemonInfo1).resolves(bulbasaur);
stub.withArgs(urls.urlPokemonInfo2).resolves(ivysaur);
stub.withArgs(urls.urlPokemonInfo3).resolves(venusaur);

module.exports = { teamRepositoryMock, urls, mocks };
