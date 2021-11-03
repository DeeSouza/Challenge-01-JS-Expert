const https = require("https");
const baseUrl = "https://pokeapi.co/api/v2/pokemon";

class TeamRepository {
  async pokemons() {
    const request = new Promise((resolve, reject) => {
      https
        .get(baseUrl, (response) => {
          var body = "";

          response.on("data", function (chunk) {
            body += chunk;
          });

          response.on("end", function () {
            return resolve(JSON.parse(body));
          });
        })
        .on("error", (error) => {
          reject(error);
        });
    });

    return request;
  }

  async pokemon(url) {
    const request = new Promise((resolve, reject) => {
      https
        .get(url, (response) => {
          var body = "";

          response.on("data", function (chunk) {
            body += chunk;
          });

          response.on("end", function () {
            return resolve(JSON.parse(body));
          });
        })
        .on("error", (error) => {
          reject(error);
        });
    });

    return request;
  }
}

module.exports = TeamRepository;
