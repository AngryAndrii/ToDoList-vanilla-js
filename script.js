import { addCard } from "./scripts/card.js";
import { clearFunction } from "./scripts/helpers.js";

const addButton = document.querySelector("#add-button");
const addBlock = document.querySelector(".add-block");

const returnButton = document.querySelector("#return");

const saveButton = document.querySelector("#save");

const newName = document.querySelector("#new-name");
const newDesc = document.querySelector("#new-descr");

// const doneButton = document.querySelector("#done-button");
const cardsContainer = document.querySelector(".window");

addButton.addEventListener("click", (ev) => {
  addBlock.classList.remove("none");
  addButton.classList.add("none");
});

returnButton.addEventListener("click", (ev) => {
  addBlock.classList.add("none");
  addButton.classList.remove("none");
  clearFunction(newName, newDesc);
});

saveButton.addEventListener("click", (ev) => {
  const name = newName.value.trim();
  const descr = newDesc.value.trim();
  addCard(name, descr);
  clearFunction(newName, newDesc);
  addBlock.classList.add("none");
  addButton.classList.remove("none");
});

// cards.forEach((card) =>
//   card.addEventListener("click", (e) => {
//     if (e.target.className === "done-button") {
//       e.currentTarget.classList.add("completed");
//     }
//   })
// );

cardsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("done-button")) {
    // const card = e.target.closest(".card");
    const card = e.target;
    card.classList.add("completed");
  }
});
