const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

const createIngredientsList = ingredients.map((ingredient) => {
  let newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  return newItem;
});

list.prepend(...createIngredientsList);

console.log(createIngredientsList);
