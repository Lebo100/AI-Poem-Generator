function generatePoem() {
    let theme = document.getElementById('theme').value;
    let style = document.getElementById('style').value;
    let length = document.getElementById('length').value;

    // Simulate poem generation
    let poem = `This is a ${length} line poem about ${theme} in the style of ${style}.`;

    document.getElementById('poem').innerText = poem;
}