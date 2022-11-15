## PokeDex Readme

### Project idea:

The idea of the project is to build a Pokemon directory, like [this](https://www.pokemon.com/us/pokedex/). It uses [GraphQL API](https://dex-server.herokuapp.com/) on the server side.

### How to test the server?

The application is deployed at [https://mzkhan25.github.io/PokeDex/](https://mzkhan25.github.io/PokeDex/)

### How to run the application locally?

If you want to run the project locally, you can do it by cloning the project and

Install packages:

```typescript
npm i
```

Run project:

```typescript
npm run start
```

Run tests:

```typescript
npm run test
```

### Features:

The endpoint by default returns more than 850 records, and fetching all of the records together would have caused a bad user experience. So, I implemented infinite scrolling by default, where data is fetched in the iteration of 25.

Other features include

-   Search by name
-   Get the list of all the pokemons together
-   Sort by type
-   Filter by type
    -   For this, I am using the APIs `filter` flag and didn't write my own filter. The reason for this was that the API didn't exhibit any method to filter all the pokemons for a single type and I would either have to fetch all the pokemons and then filter on the type or would have had to resort to just filtering the existing pokemons leading to the misleading result.

### Technologies used:

-   React
-   Redux Saga
-   Bootstrap
-   Fontawesome
-   Typescript
-   Graphql
-   Prettier
