function generatePoem(event) {
  event.preventDefault();

  // Get the theme input
  let theme = document.getElementById("keyword").value;

  // Elements to update
  let poemOutput = document.getElementById("poem-output");
  let poetryTitle = document.querySelector(".poetry-container h1");
  let poemAuthor = document.querySelector(".poem-author");
  let staticPoem = document.querySelector(".poetry-container .poem");

  // Clear previous output
  poemOutput.innerHTML = "";
  staticPoem.style.display = "none"; // Hide default poem once generation starts

  // Update title and author
  poetryTitle.textContent = `Poem for "${theme}"`;
  poemAuthor.textContent = "by SheCodes AI ✨";

  // Alert user
  alert("Generating your poem...");

  // API setup
  let apiKey = "58eo1d6cf9fa20590375b3ta54da169f";
  let context = "Become a poet like shakesphere and write a five line poem, about the following theme: ";
  let prompt = `Write a poem about ${theme}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // Fetch poem
  axios.get(apiUrl).then(function (response) {
    let poem = response.data.answer;

    // Typewriter effect
    let typewriter = new Typewriter(poemOutput, {
      loop: false,
      delay: 50,
    });

    typewriter.typeString(poem).start();
  });
}