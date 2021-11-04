const LIMIT_POKEMON = 3;

class GetListPokemonService {
  teamRepository;

  constructor(teamRepository) {
    this.teamRepository = teamRepository;
  }

  execute() {
    const pokemons = this.teamRepository.getAllPokemons();

    return pokemons;
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
