const PokemonClient = require("../client/pokemonClient");

class TeamRepository {
  #api;
  #endpoint;

  constructor() {
    this.#api = new PokemonClient();
    this.#endpoint = "https://pokeapi.co/api/v2/pokemon";
  }

  pokemons() {
    const request = this.#api.createRequest(this.#endpoint);

    return request;
  }

  pokemon(url) {
    const request = this.#api.createRequest(url);

    return request;
  }
}

module.exports = TeamRepository;
