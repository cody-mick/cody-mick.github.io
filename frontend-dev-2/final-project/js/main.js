// const fetchPokemon = async () => {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=9";
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   const pokemon = data.results.map((data, index) => ({
//     id: index + 1,
//     name: data.name,
//     typing: data.type,
//     height: data.height,
//     weight: data.weight,
//     image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//       index + 1
//     }.png`,
//   }));
//   //console.log(pokemon);
// };

// fetchPokemon();

fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    });