let numbers = Array.from({ length: 3500 }, (_, i) => i + 1); // Create an array of numbers from 1 to 3500
let currentIndex = 0;
let shuffledNumbers = [];

// Get elements from the DOM
const numberDisplay = document.getElementById('numberDisplay');
const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');

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
    numberDisplay.style.display = 'block'; // Show the number display
    nextButton.disabled = false; // Enable next button
    numberDisplay.textContent = "Number: -"; // Reset display
}

// Display the next number
function displayNextNumber() {
    if (currentIndex < shuffledNumbers.length) {
        numberDisplay.textContent = `Number: ${shuffledNumbers[currentIndex]}`;
        currentIndex++;
    } else {
        numberDisplay.textContent = "All numbers displayed!";
        nextButton.disabled = true; // Disable next button when done
    }
}

// Event listeners
startButton.addEventListener('click', startApplication);
nextButton.addEventListener('click', displayNextNumber);
