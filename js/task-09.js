const randomHexColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector("body");
const magicBtn = document.querySelector("button.change-color");
const numberOfColor = document.querySelector("span.color");

const changeBkgColor = () => {
  body.style.backgroundColor = randomHexColor();
  numberOfColor.textContent = `${body.style.backgroundColor}`;
};

magicBtn.addEventListener("click", changeBkgColor);
