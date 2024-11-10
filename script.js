// add the clicked button's value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// remove the last character in the display
function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// calculate the result of the equation
function calculate() {
    let display = document.getElementById('display');
    let equation = display.value

    //only allow numbers and operators 
    equation = equation.replace(/[^0-9+\-*/().]/g, '');

    try {
        // Use eval to evaluate the equation
        display.value = evaluateEquation(equation);
    } catch (err){
        // display an error message. Had to use err to try and stop triggering javascripts built in keyword.
        display.value = 'Error';
    }
}

// basic arithmetic evaluation
function evaluateEquation(equation) {
    // return the evaluated equation
    return new Function('return ' + equation)();
}