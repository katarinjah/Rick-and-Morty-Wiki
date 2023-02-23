const mainContainer = document.querySelector(".main-container")

export const renderCharacters = characters => {
  let html = `<div class="row text-center gy-5 character-list">`;
  characters.forEach((character) => {
    html += `
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 character-item d-flex justify-content-center" id="${character.id}">
        <div class="card" style="width: 50%">
          <img src="${character.image}" class="card-img-top" alt="character image">
            <p class="card-text">${character.name}</p>
            <button style="font-size:15px"><i style="font-size:15px" class="fa">&#xf087;</i> Like</button>
        </div>
      </div>
      `;
  });
    
  html += `</div>`;
  mainContainer.innerHTML = html;
}

// export renderSingleCharacter = character => {}