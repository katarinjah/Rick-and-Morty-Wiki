class Character {
    constructor(id, image, name) {
        this.id = id,
        this.image = image,
        this.name = name
    };
};

export const getCharacters = () => {
    return fetch(`https://rickandmortyapi.com/api/character`)
    .then(res => res.json())
    .then(response => {
        return response.results.map(({ id, image, name }) =>
        new Character(id, image, name));
    });
};

export const getSingleCharacter = id => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(characterData => {
      return new Character(
        characterData.id,
        characterData.name,
        characterData.image,
        characterData.status,
        characterData.species,
        characterData.gender,
        characterData.origin.name,
        characterData.location.name
      );
    });
  };
