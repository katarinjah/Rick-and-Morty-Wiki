import { getCharacters, getSingleCharacter } from "./data.js"
import { mainContainer, pageNumberElement, nextButton, previousButton, renderCharacters, renderSingleCharacter } from "./ui.js"

window.onload = () => {
  getCharacters().then(character => {renderCharacters(character)});
};

let currentPage = 1;
let pageNumber = parseInt(pageNumberElement.innerHTML);

const onNextButtonClick = () => {
  if (currentPage === 42) {
    pageNumber = 42;
    pageNumberElement.innerHTML = pageNumber;
    return;
  };
  currentPage++;
  pageNumber = currentPage;
  getCharacters(currentPage).then(character => {renderCharacters(character)});
  if (currentPage === 42) {
    nextButton.disabled = true;
  };
  pageNumberElement.innerHTML = pageNumber;
};

const onPreviousButtonClick = () => {
  if (currentPage === 1) {
    pageNumber = 1;
    pageNumberElement.innerHTML = pageNumber;
    return;
  };
  currentPage--;
  pageNumber = currentPage;
  getCharacters(currentPage).then(character => {renderCharacters(character)});
  if (currentPage === 1) {
    previousButton.disabled = true;
  };
  pageNumberElement.innerHTML = pageNumber;
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
  };
  button.classList.toggle("liked");
};

const onBackButtonClick = e => {
  const targetEl = e.target.parentNode.parentNode.parentNode;
  if (!targetEl.classList.contains("character-box")) {
    return;
  };
  getCharacters(currentPage).then(character => {renderCharacters(character)});
};

nextButton.addEventListener("click", onNextButtonClick)
previousButton.addEventListener("click", onPreviousButtonClick)
mainContainer.addEventListener("click", onSingleCharacterClick);
mainContainer.addEventListener("click", onLikeButtonClick);
mainContainer.addEventListener("click", onBackButtonClick)


