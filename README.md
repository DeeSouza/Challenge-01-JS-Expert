### Dependencies

```sh
npm install -g nodemon
```

### Install

```sh
npm install
```

### Run Project

```sh
npm run start
```

### Run Test

```sh
npm run test
npm run test:cov
```

### Funcionalidades

1. `GET /`

Route default.

2. `GET /team`

Return an array with 3 pokemons random. Each pokemon have the follow properties: `name` and `moves`.
And `moves` is an array with the first three names.

### Checklist features

- Web API

  - [x] Deve ter uma rota raiz usada como _fallback_.
  - [x] Deve ter uma rota de `/team`, onde:
    - [x] Deve consumir a PokeAPI e selecionar 3 pokemóns aleatórios
    - [x] Deve consumir a PokeAPI para obter mais informações sobre os pokemóns escolhidos
    - [x] Deve retornar um objeto JSON contendo um array com 3 pokemóns, cada um com seus respectivos `name (String)` e `moves (String[])`

- Testes
  - [x] Deve ter cobertura de testes end-2-end e unitários
  - [x] 100% de code coverage
