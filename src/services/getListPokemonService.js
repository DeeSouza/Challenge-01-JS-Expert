const teamRepository = require("../repository/teamRepository");

const LIMIT_POKEMON = 3;

class GetListPokemonService {
  teamRepository;

  constructor() {
    this.teamRepository = new teamRepository();
  }

  async execute() {
    const teamRepository = await this.teamRepository.pokemons();

    return teamRepository;
  }

  async getPokemons() {
    const response = await this.execute();
    const pokemons = this.getPokemonRandom(response.results);

    return pokemons;
  }

  getPokemonRandom(pokemons) {
    const random = [];

    for (let cont = 0; cont < LIMIT_POKEMON; cont++) {
      let pushed = true;

      while (pushed) {
        const indexRandom = Math.floor(Math.random() * pokemons.length);
        const randomPokemon = pokemons[indexRandom];

        const checkAlreadyExistsPokemon = random.some(
          (pokemon) => pokemon.name === randomPokemon.name
        );

        if (!checkAlreadyExistsPokemon) {
          random.push(randomPokemon);
          pushed = false;
        }
      }
    }

    return random;
  }
}

module.exports = GetListPokemonService;
