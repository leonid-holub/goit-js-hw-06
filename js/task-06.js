const inputField = document.querySelector("input#validation-input");
const lengthValue = inputField.getAttribute("data-length");
console.log(lengthValue);

const chekingInputField = (event) => {
  if (event.currentTarget.value.length === 0) {
    inputField.classList.remove("valid");
    inputField.classList.remove("invalid");
  } else if (event.currentTarget.value.length === 6) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  } else {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  }
  console.log(event.currentTarget.value.length);
};

inputField.addEventListener("blur", chekingInputField);
