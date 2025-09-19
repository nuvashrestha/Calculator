let num1;
let num2;

let displayNumber = document.querySelector("#display-number");
let currentInput = " ";
let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let clearButton = document.querySelector(".clear");
let equalButton = document.querySelector(".equal");
let answer = 0;

function equalButtonCLick() {
    equalButton.addEventListener("click", () => {
        num2 = Number(currentInput);
        operate(currentOperator, num1, num2);
        console.log("operator, num1, num2", currentOperator, num1, num2);
    });
}

function clearButtonClick() {
    clearButton.addEventListener("click", () => {
        displayNumber.textContent = "0";
        currentInput = "";
        num1 = null;
        num2 = null;
    });
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Error: Division by zero");
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            answer = add(num1, num2);
            break;
        case '-':
            answer = subtract(num1, num2);
            break;
        case '*':
            answer = multiply(num1, num2);
            break;
        case '/':
            answer = divide(num1, num2);
            break;
        default:
            alert("Error: Invalid operator");
            return null;
    }
    displayNumber.textContent = answer;
}


function clickDigitButtons() {
    digits.forEach(num => {
        num.addEventListener("click", () => {
            currentInput += num.textContent;
            displayNumber.textContent = num.textContent;
            console.log("in digit click function", currentInput);
        });
    });
}

function clickOperatorsButtons() {
    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            currentOperator = operator.textContent;
            num1 = Number(currentInput);
            currentInput = "";
            console.log("in operator click function", currentInput);
        });
    });
}
clickDigitButtons();
clickOperatorsButtons();
clearButtonClick();
equalButtonCLick();
