let digits = [0, 0, 0, 0]; // Four digits to display
let generatedNumbers = new Set(); // To keep track of generated numbers
let intervalId;
const scrollInterval = 100; // Interval to update digits in milliseconds

// Get elements from the DOM
const numberDisplay = document.getElementById('numberDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Function to update the displayed number
function updateDisplay() {
    numberDisplay.textContent = `Number: ${digits.join('')}`;
}

// Function to generate a unique random number based on digit constraints
function generateRandomNumber() {
    let number;
    do {
        // Generate digits based on the specified ranges
        const firstDigit = Math.floor(Math.random() * 4); // 0-3
        const secondDigit = Math.floor(Math.random() * 10); // 0-9
        const thirdDigit = Math.floor(Math.random() * 10); // 0-9
        const fourthDigit = Math.floor(Math.random() * 10); // 0-9
        
        // Combine digits to form the final number
        number = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`;
        
        // Convert to integer for range checking
        const combinedNumber = parseInt(number, 10);
    } while (generatedNumbers.has(number) || parseInt(number) > 3500); // Ensure uniqueness and range
    
    generatedNumbers.add(number); // Add the generated number to the set
    return number; // Return the unique number
}

// Function to start the scrolling effect
function startScrolling() {
    stopButton.disabled = false; // Enable the stop button
    startButton.disabled = true; // Disable the start button
    
    // Scroll each digit
    intervalId = setInterval(() => {
        // Generate digits with a correct range
        digits[0] = Math.floor(Math.random() * 4); // 1st digit: 0-3
        digits[1] = Math.floor(Math.random() * 10); // 2nd digit: 0-9
        digits[2] = Math.floor(Math.random() * 10); // 3rd digit: 0-9
        digits[3] = Math.floor(Math.random() * 10); // 4th digit: 0-9

        // Ensure the combined number is less than or equal to 3500
        const combinedNumber = parseInt(digits.join(''), 10);
        if (combinedNumber <= 3500) {
            updateDisplay(); // Update the display with the current digits
        }
    }, scrollInterval); // Update every scrollInterval milliseconds
}

// Function to stop scrolling and display the number
function stopScrolling() {
    clearInterval(intervalId); // Stop the interval
    stopButton.disabled = true; // Disable the stop button
    startButton.disabled = false; // Enable the start button

    // Generate a unique random number
    const finalNumber = generateRandomNumber(); 
    digits = finalNumber.split('').map(Number); // Convert to array of digits
    updateDisplay(); // Display the final number
}

// Event listeners
startButton.addEventListener('click', startScrolling); // Start button functionality
stopButton.addEventListener('click', stopScrolling); // Stop button functionality
