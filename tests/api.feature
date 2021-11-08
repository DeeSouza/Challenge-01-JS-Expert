Feature: Routes API
    Testing routes from API

    Scenario: Enter in default route
        Given Request in API
        When Enter in default Route
        Then Return message of success

    Scenario: Enter in default /team
        Given Request in API
        When Enter in default /team
        Then Return three pokemons differents
        Then Return three moves of each pokemons in JSON