document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById("display");

    // Function to append to display
    function appendToDisplay(input) {
        display.value += input;
    }

    // Function to clear display
    function clearDisplay() {
        display.value = "";
    }

    // Function to calculate the result
    function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "ERROR";
        }
    }

    // Function to handle backspace
    function handleBackspace() {
        display.value = display.value.slice(0, -1); //Removes the last character using slice
    }

    // event listeners to buttons
    document.querySelectorAll('button').forEach(button => { //loops through all buttons
        button.addEventListener('click', function() { //adds click event listener to all buttons
            if (this.textContent === '=') {
                calculate();
            } else if (this.textContent === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(this.textContent);
            }
        });
    });

    // keyboard event listener
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace') {
            handleBackspace();
        } else if (event.key === 'Enter' || event.key === '=') {
            calculate();
        } else if (event.key === 'Escape') {
            clearDisplay();
        } else if (!isNaN(event.key) || ['+', '-', '*', '/', '.'].includes(event.key)) { // if key is a number or an operator
            appendToDisplay(event.key);
        }
    });
});