const display = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b


let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function operate(operator, firstNumber, secondNumber) {
    if (operator === '+') {
       return add(firstNumber, secondNumber)
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber)
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber)
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber)
    }
}

let displayValue = '0';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = button.value;
        if (buttonValue === 'clear') {
            clearDisplay()
        } else if (buttonValue === '+' || buttonValue === '-'
        || buttonValue === '*' || buttonValue === '/') {
            firstNumber = parseFloat(displayValue) 
            operator = buttonValue;
            displayValue = '0';
        } else if (buttonValue === '=') {
            secondNumber = parseFloat(displayValue)
            displayValue = operate(operator, firstNumber, secondNumber).toString()
        } else {
            if (displayValue === '0') {
                displayValue = buttonValue;
            } else {
                displayValue += buttonValue;
            }
        }
        updateDisplay()
    })
})

function updateDisplay() {
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}