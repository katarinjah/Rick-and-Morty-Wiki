import { getCharacters, getSingleCharacter } from "./data.js"
import { renderCharacters } from "./ui.js"


window.onload = function() {
    getCharacters().then(character => {renderCharacters(character)});
};



