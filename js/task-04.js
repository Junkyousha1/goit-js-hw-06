let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const outputSpan = document.getElementById("value");
decrementBtn.addEventListener("click", event => {
  outputSpan.textContent = --counterValue;
});
incrementBtn.addEventListener("click", event => {
  outputSpan.textContent = ++counterValue;
});