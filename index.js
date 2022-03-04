require("isomorphic-fetch");

async function getPokemon() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>
    res.json()
  );

  const randomPokemon =
    pokemon["results"][Math.floor(Math.random() * pokemon["results"].length)];

  const myPokemon = await fetch(randomPokemon.url).then((res) => res.json());

  console.log("Your Pokemon: ", myPokemon.name);
  console.log("Weight: ", myPokemon.weight);
  console.log("Height: ", myPokemon.height);
}

getPokemon();
