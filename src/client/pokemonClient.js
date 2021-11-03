const https = require("https");

class PokemonClient {
  #endpoint;

  async build() {
    const request = new Promise((resolve, reject) => {
      https.get(`${this.#endpoint}`, (response) => {
        var body = "";

        response.on("data", function (chunk) {
          body += chunk;
        });

        response.on("end", function () {
          return resolve(JSON.parse(body));
        });
      });
    });

    return request;
  }

  createRequest(endpoint) {
    this.#endpoint = endpoint;

    return this.build();
  }
}

module.exports = PokemonClient;
