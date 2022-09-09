
let counterValue = 0;
const shownValue = document.querySelector("span#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const addOne = () => {
  counterValue += 1;
  shownValue.textContent = counterValue;
};

const removeOne = () => {
  counterValue -= 1;
  shownValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", removeOne);
incrementBtn.addEventListener("click", addOne);
