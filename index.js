const helloWorld = require("./src/helloWorld");
const pokemon = require("./src/pokemon");

helloWorld.printHelloWorld();

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow/")
  .then((response) => response.json())
  .then((json) => {
    pokemon.printYellowPokemon(json.pokemon_species);
  })
  .catch((err) => {
    console.log(err);
  });
