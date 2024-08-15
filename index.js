import characters from "./data/dataCharacters.js";
import { renderCharacter } from "./utils/renderCharacter.js";

// Container app of the HTML
const container = document.querySelector('.app');

characters.forEach(character => {
    // Create a character figure
    const characterFigure = renderCharacter(character);

    // Append the character figure to the container
    container.appendChild(characterFigure);
});