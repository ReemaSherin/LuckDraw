let numbers = Array.from({ length: 3500 }, (_, i) => i + 1); // Create an array of numbers from 1 to 3500
let currentIndex = 0;
let shuffledNumbers = [];

// Get elements from the DOM
const numberDisplay = document.getElementById('numberDisplay');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');

// Shuffle the numbers array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Start the application
function startApplication() {
    shuffledNumbers = [...numbers]; // Copy original array
    shuffleArray(shuffledNumbers); // Shuffle the numbers
    currentIndex = 0; // Reset current index
    numberDisplay.textContent = "Number: -"; // Reset display
    nextButton.disabled = false; // Enable next button
    restartButton.disabled = true; // Disable restart button
}

// Display the next number
function displayNextNumber() {
    if (currentIndex < shuffledNumbers.length) {
        numberDisplay.textContent = `Number: ${shuffledNumbers[currentIndex]}`;
        currentIndex++;
    } else {
        numberDisplay.textContent = "All numbers displayed!";
        nextButton.disabled = true; // Disable next button when done
        restartButton.disabled = false; // Enable restart button
    }
}

// Event listeners
nextButton.addEventListener('click', displayNextNumber);
restartButton.addEventListener('click', startApplication);

// Start the application on page load
startApplication();
