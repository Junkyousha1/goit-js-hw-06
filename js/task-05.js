const outputSpan = document.getElementById("name-output");
document.getElementById("name-input").addEventListener("input", event => {
  outputSpan.textContent = event.target.value || "Anonymous";
});