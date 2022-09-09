const inputField = document.querySelector("input#name-input");
const outputField = document.querySelector("span#name-output");
let outputAnonymous = "Anonymous";

const outputNewAnonymous = function outputting(event) {
  if (event.currentTarget.value.length > 0) {
    outputField.textContent = event.currentTarget.value;
  } else if (event.currentTarget.value.length === 0)
    outputField.textContent = outputAnonymous;
};
inputField.addEventListener("input", outputNewAnonymous);
