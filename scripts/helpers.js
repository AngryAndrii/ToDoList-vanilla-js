export const clearFunction = (firstElem, secondElem) => {
  firstElem.value = "";
  secondElem.value = "";
};

export const verifyFunction = (name, descr) => {
  if (name === "" || descr === "") {
    alert("please add name and descr, for adding a task");
    return null;
  }
};
