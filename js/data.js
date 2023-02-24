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

export const getCharacters = () => {
    return fetch(`https://rickandmortyapi.com/api/character`)
    .then(res => res.json())
    .then(response => {
        return response.results.map(({ id, image, name }) =>
        new Character(id, image, name));
    });
};

export const paginated_fetch = () => {
  return fetch(`${url}&page=${page}`)
    .then(response => response.json())
    .then(newResponse => {
      const response = [...previousResponse, ...newResponse];

      if (newResponse.length !== 0) {
        page++;

        return paginated_fetch(url, page, response);
      }

      return response;
    });
}

export const getSingleCharacter = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
      return new Character(
        data.id,
        data.image,
        data.name,
        data.status,
        data.species,
        data.gender,
        data.origin.name,
        data.location.name
      );       
  });
};

  
