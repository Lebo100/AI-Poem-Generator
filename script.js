function generatePoem(event) {
    event.preventDefault(); // Prevent form submission

    // Show loading message
    alert("Generating your poem...");

    // Get the input keyword from the user
    let theme = document.getElementById('theme').value;

    // Replace the existing poem with a new one using the Typewriter effect
    let poemOutput = document.getElementById('poem-output');
    
    // Clear the existing poem content
    poemOutput.innerHTML = '';

    // Initialize the Typewriter effect
    let typewriter = new Typewriter(poemOutput, {
        loop: false,
        delay: 75
    });

    // Start typing the generated fake poem
    typewriter.typeString(theme)
        .start();

    // Replace the 'Whispers on Paper' with the generated poem title
    let poetryTitle = document.querySelector('.poetry-container h1');
    poetryTitle.textContent = `Poem for "${theme}"`;  // You can customize the title based on the theme
}