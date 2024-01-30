const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.getElementById("ingredients").append(
  ...ingredients.map(text => {
    const element = document.createElement("li");
    element.textContent = text;
    element.classList.add("item");
    return element;
  })
);