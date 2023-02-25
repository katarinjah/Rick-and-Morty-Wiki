export const mainContainer = document.querySelector(".main-container");
export const nextButton = document.querySelector(".next");
export const previousButton = document.querySelector(".previous");
export const pageNumberElement = document.querySelector(".page-number");

export const renderCharacters = characters => {
  let html = `<div class="row text-center gy-4 gx-4 character-list">`;
  characters.forEach((character) => {
    html += `
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 character-item d-flex justify-content-center" id="${character.id}">
        <div class="card" style="width:50%">
          <div class="card-top">
           <img src="${character.image}" class="card-img-top" alt="character image">
           <p class="card-text">${character.name}</p>
          </div>
          <div class="card-bottom">
            <button class="like-button" style="font-size:15px"><i style="font-size:15px" class="fa">&#xf087;</i> Like</button>
          </div>
        </div>
      </div>
      `;
  });
    
  html += `</div>`;
  mainContainer.innerHTML = html;
};

export const renderSingleCharacter = character => {
  let html = `
  <div class="character-box">
    <div class="row text-center">
      <h3 class="name">${character.name}</h3>
      <hr>
    </div>
    <div class="row justify-content-center">
      <img class="char-img" src="${character.image}">
    </div>
    <div class="details">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-3 left">
          <h5>Status: </h5>
        </div>
        <div class="col-sm-3 right">${character.status}</div>
        <div class="col-sm-3"></div>
      </div>
      <div class="row">
      <div class="col-sm-3"></div>
        <div class="col-sm-3 left">
          <h5>Species: </h5> 
        </div>
        <div class="col-sm-3 right">${character.species}</div>
        <div class="col-sm-3"></div>
      </div>
      <div class="row">
      <div class="col-sm-3"></div>
        <div class="col-sm-3 left">
          <h5>Gender: </h5> 
        </div>
        <div class="col-sm-3 right">${character.gender}</div>
        <div class="col-sm-3"></div>
      </div>
      <div class="row">
      <div class="col-sm-3"></div>
        <div class="col-sm-3 left">
          <h5>Origin: </h5> 
        </div>
        <div class="col-sm-3 right">${character.origin}</div>
        <div class="col-sm-3"></div>
      </div>
      <div class="row">
      <div class="col-sm-3"></div>
        <div class="col-sm-3 left">
          <h5>Location: </h5>
        </div>
        <div class="col-sm-3 right">${character.location}</div>
        <div class="col-sm-3"></div>
      </div>
      <div class="row justify-content-center">
        <button id="back-button">Back</button>
      </div>
    </div>
  </div>
  `;

  mainContainer.innerHTML = html;
}
