const addButton = document.querySelector("#add-button");
const addBlock = document.querySelector(".add-block");

addButton.addEventListener("click", (ev) => {
  addBlock.classList.toggle("none")
});
