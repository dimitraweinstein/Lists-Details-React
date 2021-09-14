export const fetchCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((json) =>
      json.results.map((character) => ({
        id: character.id,
        name: character.name,
        species: character.species,
        image: character.image,
      }))
    );
};

export const fetchCharactersById = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((json) => ({
      id: json.id,
      name: json.name,
      species: json.species,
      image: json.image,
    }));
};
