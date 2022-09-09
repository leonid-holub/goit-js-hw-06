function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let mainBox = document.querySelector("div#boxes");
const inputArea = document.querySelector("input");

const submitNumberOfBoxes = () => {
  console.log(inputArea.value);
  const createBoxes = (amount) => {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      mainBox.append(box);
      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
      box.style.backgroundColor = getRandomHexColor();
    }
  };
  createBoxes(inputArea.value);
};

const submitBoxesNumberBtn = document.querySelector("[data-create]");
submitBoxesNumberBtn.addEventListener("click", submitNumberOfBoxes);

const clearMainBoxBtn = document.querySelector("[data-destroy]");
const clearingMainBoxBtn = () => {
  mainBox.innerHTML = "";
};
clearMainBoxBtn.addEventListener("click", clearingMainBoxBtn);
