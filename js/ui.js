const mainContainer = document.querySelector(".main-container")

export const renderCharacters = (characters) => {
    characters.forEach((character) => {
        html += `
          <div class="col-sm-12 col-md-6 col-lg-3 show-item d-flex justify-content-center" id="${character.id}">
            <div class="card" style="width: 50%">
              <img src="${character.image}" class="card-img-top" alt="show cover image">
              <h5 class="card-text">${character.name}</h5>
            </div>
          </div>
        `;
    });
    
    html += `</div>`;
    mainContainer.html(html);
}