import { verifyFunction } from "./helpers.js";

const addBlock = document.querySelector(".add-block");

export const addCard = (name, descr) => {
  // verifyFunction(name, descr);
  if (verifyFunction(name, descr) === null) {
    return;
  }
  const tamplate = `<div class="card">
        <div class="corner-icons-container">
          <svg class="icon">
            <use href="./icons/sprite.svg#edit_icon"></use>
          </svg>
          <svg class="icon">
            <use href="./icons/sprite.svg#trash_icon"></use>
          </svg>
        </div>
        <span class="tag">домашні справи</span>
        <h2 class="name">${name} </h2>
        <p class="description">
        ${descr}
        </p>
        <button data-action="done" class="done-button" id="done-button">
          <svg class="icon clipboard-icon">
            <use href="./icons/sprite.svg#clipboard_icon"></use>
          </svg>
          Завершити
        </button>
      </div>`;

  addBlock.insertAdjacentHTML("beforebegin", tamplate);
};
