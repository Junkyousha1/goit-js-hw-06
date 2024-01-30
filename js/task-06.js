const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", ({target}) => {
  target.className =
    target.value.length == target.dataset.length ? "valid" : "invalid";
});