import { addCard } from "./scripts/card.js";
import { clearFunction } from "./scripts/helpers.js";

const addButton = document.querySelector("#add-button");
const addBlock = document.querySelector(".add-block");

const newName = document.querySelector("#new-name");
const newDesc = document.querySelector("#new-descr");

const cardsContainer = document.querySelector(".window");

const addTask = () => {
  addBlock.classList.remove("none");
  addButton.classList.add("none");
};

const saveTask = () => {
  const name = newName.value.trim();
  const descr = newDesc.value.trim();
  addCard(name, descr);
  clearFunction(newName, newDesc);
  addBlock.classList.add("none");
  addButton.classList.remove("none");
};

const returnAdding = () => {
  addBlock.classList.add("none");
  addButton.classList.remove("none");
  clearFunction(newName, newDesc);
};

const makeDone = (card) => {
  card.classList.add("completed");
};

cardsContainer.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  const card = e.target.closest(".card");
  switch (action) {
    case "add":
      addTask();
      return;
    case "save":
      saveTask();
      return;
    case "return":
      returnAdding();
      return;
    case "done":
      makeDone(card);
      return;
    default:
      return;
  }
});
