let isScrolling = false;
let intervalId;
let digits = [0, 0, 0, 0]; // Four digits to display

// Get elements from the DOM
const numberDisplay = document.getElementById('numberDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Function to update the displayed number
function updateDisplay() {
    numberDisplay.textContent = `Number: ${digits.join('')}`;
}

// Function to start scrolling
function startScrolling() {
    isScrolling = true;
    stopButton.disabled = false; // Enable stop button
    startButton.disabled = true; // Disable start button

    // Start an interval to change each digit
    intervalId = setInterval(() => {
        for (let i = 0; i < digits.length; i++) {
            digits[i] = Math.floor(Math.random() * 10); // Random number from 0 to 9
        }
        updateDisplay();
    }, 100); // Change every 100ms (adjust as necessary)
}

// Function to stop scrolling and generate a final four-digit number
function stopScrolling() {
    clearInterval(intervalId); // Stop the interval
    isScrolling = false;

    // Generate a final number up to 3500
    const finalNumber = Math.floor(Math.random() * 3501); // Random number from 0 to 3500
    digits = String(finalNumber).padStart(4, '0').split('').map(Number); // Convert to array of digits

    updateDisplay(); // Display the final number
    
    stopButton.disabled = true; // Disable stop button
    startButton.disabled = false; // Enable start button
}

// Event listeners
startButton.addEventListener('click', startScrolling);
stopButton.addEventListener('click', stopScrolling);
