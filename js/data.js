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
    .then((characters) => {
        console.log(characters)
        characters.map(({ id, image, name }) =>
        new Character(id, image, name));
    });
};
