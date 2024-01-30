function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const outputSpan = document.querySelector(".color"),
  bodyStyle = document.body.style;
document.querySelector(".change-color").addEventListener("click", event => {
    const hexColor = getRandomHexColor();
    outputSpan.textContent = hexColor;
    bodyStyle.backgroundColor = hexColor;
  });