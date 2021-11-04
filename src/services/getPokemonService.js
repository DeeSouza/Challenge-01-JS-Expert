class GetPokemonService {
  teamRepository;

  constructor(teamRepository) {
    this.teamRepository = teamRepository;
  }

  execute(urlPokemon) {
    const pokemon = this.teamRepository.findPokemonByUrl(urlPokemon);

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

    const response = Promise.all(pokemonInfo);

    return response;
  }

  getMoves(moves) {
    return moves.map(({ move }) => move.name).slice(0, 3);
  }
}

module.exports = GetPokemonService;
