import { getCharacters, getSingleCharacter } from "./data.js"
import { mainContainer, renderCharacters, renderSingleCharacter } from "./ui.js"

window.onload = function() {
    getCharacters().then(character => {renderCharacters(character)});
};

const onSingleCharacterClick = e => {
    const targetEl = e.target.parentNode.parentNode;
    if (!targetEl.classList.contains("character-item")) {
      return;
    };
    const id = targetEl.getAttribute("id");
    getSingleCharacter(id)
      .then(character => {
        renderSingleCharacter(character);
      });
  };
  

mainContainer.addEventListener("click", onSingleCharacterClick);



