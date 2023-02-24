import { getCharacters, getSingleCharacter } from "./data.js"
import { mainContainer, renderCharacters, renderSingleCharacter } from "./ui.js"

window.onload = function() {
    getCharacters().then(character => {renderCharacters(character)});
};

const onSingleCharacterClick = e => {
  const targetEl = e.target.closest('.card-top');
  const id = targetEl.parentNode.parentNode.getAttribute('id');
  getSingleCharacter(id)
    .then(character => {
      renderSingleCharacter(character);
    });
};

const onLikeButtonClick = e => {
  const button = e.target;
  if (!button.classList.contains("like-button")) {
    return;
  }
  button.classList.toggle("liked");
};

const onBackButtonClick = e => {
  const targetEl = e.target.parentNode.parentNode.parentNode;
  if (!targetEl.classList.contains("character-box")) {
    return;
  };
  getCharacters().then(character => {renderCharacters(character)});
};

mainContainer.addEventListener("click", onSingleCharacterClick);
mainContainer.addEventListener("click", onLikeButtonClick);
mainContainer.addEventListener("click", onBackButtonClick)


