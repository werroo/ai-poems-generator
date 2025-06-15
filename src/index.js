function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "04b5fc5oc9b0fe6f93atfbe5cc26da36";
  let prompt = `User instructions: Generate a short poem about ${instructionsInput.value}`;
  let context =
    "You are a poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic html and separate each line with a < br />. Do not include the backticks or html. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
