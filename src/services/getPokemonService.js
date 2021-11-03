const teamRepository = require("../repository/teamRepository");

class GetPokemonService {
  teamRepository;

  constructor() {
    this.teamRepository = new teamRepository();
  }

  async execute(urlPokemon) {
    const pokemon = await this.teamRepository.pokemon(urlPokemon);

    return pokemon;
  }

  async getInfoPokemons(pokemons) {
    const pokemonInfo = pokemons.map(async (pokemon) => {
      const response = await this.execute(pokemon.url);
      const moves = this.getMoves(response.moves);

      return {
        name: response.name,
        moves,
      };
    });

    const response = await Promise.all(pokemonInfo);

    return response;
  }

  getMoves(moves) {
    return moves.map(({ move }) => move.name).slice(0, 3);
  }
}

module.exports = GetPokemonService;
