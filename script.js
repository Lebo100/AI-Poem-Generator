// Function to generate a poem based on user input
function generatePoem(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get user input from the input field
    let theme = document.getElementById("keyword").value;

    // Show loading alert
    let loadingMessage = document.querySelector("#loading-message");
    loadingMessage.style.display = "block"; // Show loading message
    document.getElementById("generate-button").disabled = true; // Disable the button

    // Get the poem display area
    let poemOutput = document.querySelector(".poem");

    // Get the poem title and author elements
    let poetryTitle = document.querySelector(".poetry-container h1");
    let poemAuthor = document.querySelector(".poetry-container .poem-author");

    // Set the author name
    poemAuthor.textContent = "by SheCodes AI ✨";

    // Update the poem title based on the theme, converting the theme to uppercase
    poetryTitle.textContent = `"${theme.toUpperCase()}"`;

    // Clear previous poem content
    poemOutput.innerHTML = "";

    // Set up API details
    let apiKey = "58eo1d6cf9fa20590375b3ta54da169f";
    let prompt = `Write a five-line poem about ${theme}`;
    let context = "Become a poet inspire by Shakespear. Only write five lines. Each line should be poetic and relevant to the theme.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    // Fetch the poem from the AI API
    axios.get(apiUrl).then(function (response) {

        // Get the AI-generated poem
        let poem = response.data.answer;

         // Use Typewriter effect to display the poem line by line
        let typewriter = new Typewriter(poemOutput, {
            loop: false,
            delay: 40, // typing speed
        });

        // Start typing the poem
        typewriter
            .typeString(formatPoem(poem))
            .callFunction(() => {
                // Remove the typewriter cursor after typing
                let cursor = document.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.display = 'none';
                }
                // Hide loading state and re-enable the button
                loadingMessage.style.display = "none";
                document.getElementById("generate-button").disabled = false; // Re-enable button
            })
            .start();
    });
}

// Helper function to convert plain text poem into HTML with <p> tags
function formatPoem(poemText) {
    let lines = poemText.split("\n");
    lines = lines.slice(0, 5); // Ensure we are limiting to 5 lines
    return lines.map(line => `<p>${line}</p>`).join("");
}

// Attach event listener to the generate button
document.getElementById("generate-button").addEventListener("click", generatePoem);