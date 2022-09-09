const sizeControl = document.querySelector("input#font-size-control");
const textForChange = document.querySelector("span#text");
textForChange.style.fontSize = `${sizeControl.value}px`;

const changeText = (event) => {
  textForChange.style.fontSize = `${event.currentTarget.value}px`;
};

console.log(sizeControl.value);

sizeControl.addEventListener("input", changeText);
