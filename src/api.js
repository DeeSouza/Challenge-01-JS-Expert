const http = require("http");

const GetListPokemonService = require("./services/getListPokemonService");
const GetPokemonService = require("./services/getPokemonService");
const TeamRepository = require("../src/repository/teamRepository");

const routes = {
  default: (request, response) => {
    response.write("PokeAPI Default Page");

    return response.end();
  },

  "/team:get": async (request, response) => {
    const teamRepository = new TeamRepository();
    const getListPokemon = new GetListPokemonService(teamRepository);
    const getPokemon = new GetPokemonService(teamRepository);

    const pokemons = await getListPokemon.getPokemons();
    const result = await getPokemon.getInfoPokemons(pokemons);

    response.writeHead(200, {
      "Content-Type": "application/json",
    });

    return response.end(JSON.stringify(result));
  },
};

const handler = function (request, response) {
  const { url, method } = request;
  const routeKey = `${url}:${method.toLowerCase()}`;
  const chosenRoute = routes[routeKey] || routes.default;

  return chosenRoute(request, response);
};

const app = http
  .createServer(handler)
  .listen(8000, () => console.log("Server running at port", 8000));

module.exports = app;
