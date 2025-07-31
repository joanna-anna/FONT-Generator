function generateFont(event) {
  event.preventDefault();

  new Typewriter("#font", {
    strings: "Helvica is always the best",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let FontElement = document.querySelector("#font-generation");
FontElement.addEventListener("submit", generateFont);
