import { addCard } from "./scripts/card.js";

const addButton = document.querySelector("#add-button");
const addBlock = document.querySelector(".add-block");

const returnButton = document.querySelector("#return");

const saveButton = document.querySelector("#save");

const newName = document.querySelector("#new-name");
const newDesc = document.querySelector("#new-descr");

addButton.addEventListener("click", (ev) => {
  addBlock.classList.remove("none");
  addButton.classList.add("none");
});

returnButton.addEventListener("click", (ev) => {
  addBlock.classList.add("none");
  addButton.classList.remove("none");
});

const getDataFromNew = () => {};

saveButton.addEventListener("click", (ev) => {
  const name = newName.value;
  const descr = newDesc.value;
  addCard(name, descr);
});
