// script.js

// Select the textarea and character count elements
const textEditor = document.getElementById('text-editor');
const charCountDisplay = document.getElementById('char-count');

// Function to update the character count
function updateCharacterCount() {
    // Get the current length of the text in the textarea
    const currentLength = textEditor.value.length;
    // Calculate remaining characters
    const remainingCharacters = 280 - currentLength;

    // Update the character count display
    charCountDisplay.textContent = `${remainingCharacters} characters remaining`;

    // Optionally change the color based on the remaining characters
    if (remainingCharacters < 0) {
        charCountDisplay.style.color = 'red'; // Over limit
    } else {
        charCountDisplay.style.color = '#657786'; // Normal
    }
}

// Add an event listener to update the character count on input
textEditor.addEventListener('input', updateCharacterCount);

// Initialize the character count on page load
updateCharacterCount();
