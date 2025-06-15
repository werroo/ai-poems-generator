function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Some say the world will end in fire",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
