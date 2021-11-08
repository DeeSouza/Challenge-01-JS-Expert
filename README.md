### Funcionalidades

1. `GET /`

Deve ser a rota padrão da aplicação ao tentar acessar qualquer rota inexistente. (ex.: `/hi`, `/hello`)

2. `GET /team`

Deve retornar um array com 3 pokemóns aleatórios, contendo seus respectivos `name` e `moves`, (mostrando apenas um array de strings com os 3 primeiros `moves` presentes na API. ex.: `["mega-punch","fire-punch","thunder-punch"]`).

### Testes

- [ ] mocks
- [ ] stubs
- [ ] spies
- [ ] testes end-2-end
- [ ] testes unitários
- [ ] 100% de code coverage

### Extras

- [ ] TDD e BDD, será que rola? Acho que vale a tentativa!
- [ ] Que tal consumir a API sem usar libs externas? o módulo `https` do node pode ser bem interessante!

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
