const https = require("https");

const baseUrl = "https://pokeapi.co/api/v2";

class TeamRepository {
  async makeRequest(endpoint) {
    const request = new Promise((resolve, reject) => {
      var chunks = [];

      https.get(endpoint, (response) => {
        response.on("data", function (data) {
          chunks.push(data);
        });

        response.on("error", reject);
        response.on("end", () => {
          const data = Buffer.concat(chunks);
          resolve(JSON.parse(data));
        });
      });
    });

    return request;
  }

  getAllPokemons() {
    const request = this.makeRequest(`${baseUrl}/pokemon`);

    return request;
  }

  findPokemonByUrl(url) {
    const request = this.makeRequest(url);

    return request;
  }
}

module.exports = TeamRepository;
