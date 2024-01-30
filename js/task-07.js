const textSpan = document.getElementById("text");
document.getElementById("font-size-control").addEventListener("input", ({target}) => {
    textSpan.style.fontSize = target.value + "px";
  });