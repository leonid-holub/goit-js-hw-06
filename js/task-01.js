const firstTaskUl = document.querySelector("ul#categories");
const allItemsInsideUl = firstTaskUl.querySelectorAll("li.item");
const showNumbersOfLists = console.log(
  "Number of categories: ",
  allItemsInsideUl.length
);

infoAboutItems();
function infoAboutItems() {
  for (const item of allItemsInsideUl) {
    const allItemsOfItem = item.querySelectorAll("li");
    const title = item.querySelector("h2");
    console.log("Category: ", title.textContent);
    console.log("Elements: ", allItemsOfItem.length);
  }
}
