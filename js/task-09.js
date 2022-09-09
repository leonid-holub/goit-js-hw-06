const randomHexColor = function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector("body");
const magicBtn = document.querySelector("button.change-color");
const numberOfColor = document.querySelector("span.color");

const changeBkgColor = () => {
	let boxColor = randomHexColor();
	body.style.backgroundColor = boxColor;
	numberOfColor.textContent = boxColor;
};

magicBtn.addEventListener("click", changeBkgColor);
