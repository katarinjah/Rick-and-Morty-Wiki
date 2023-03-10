class Character {
    constructor(id, image, name, status, species, gender, origin, location) {
        this.id = id,
        this.image = image,
        this.name = name,
        this.status = status,
        this.species = species,
        this.gender = gender,
        this.origin = origin,
        this.location = location
    };
};

export const getCharacters = (page = 1) => {
  const url = `https://rickandmortyapi.com/api/character${page > 1 ? `?page=${page}` : ""}`;
  return fetch(url)
    .then(res => res.json())
    .then(response => {
      return response.results.map(({ id, image, name }) =>
        new Character(id, image, name));
    });
};

export const getSingleCharacter = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const originName = data.origin.name;
      const  locationName = data.location.name;
      return new Character(
        data.id,
        data.image,
        data.name,
        data.status,
        data.species,
        data.gender,
        originName,
        locationName
      );       
  });
};

  
