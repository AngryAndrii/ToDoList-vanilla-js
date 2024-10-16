import { addCard } from "./scripts/card.js";
import { clearFunction } from "./scripts/helpers.js";

const addButton = document.querySelector("#add-button");
const addBlock = document.querySelector(".add-block");

const returnButton = document.querySelector("#return");

const saveButton = document.querySelector("#save");

const newName = document.querySelector("#new-name");
const newDesc = document.querySelector("#new-descr");

// const doneButton = document.querySelector("#done-button");
const cards = document.querySelectorAll(".card");

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
  const name = newName.value;
  const descr = newDesc.value;
  addCard(name, descr);
  clearFunction(newName, newDesc);
  addBlock.classList.add("none");
  addButton.classList.remove("none");
});

// doneButton.addEventListener("click", (e) => {
//   console.log(e);
// });

// e.target.nodeName

// testCard.addEventListener("click", (e) => {
//   if (e.target.className === "done-button") {

//   }
// });

console.log(cards);
