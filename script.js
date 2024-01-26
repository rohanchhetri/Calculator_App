const resultElement = document.getElementById("result");
const clearBtn = document.getElementById("clear-button");
const deleteBtn = document.getElementById("delete-button");
const percentBtn = document.getElementById("percent-button");
const divideBtn = document.getElementById("divide-button");
const multiplyBtn = document.getElementById("multiply-button");
const subtractBtn = document.getElementById("subtract-button");
const additionBtn = document.getElementById("addition-button");
const decimalBtn = document.getElementById("decimal-button");
const equalBtn = document.getElementById("equal-button");
const numberBtns = document.querySelectorAll(".number");
const doubleZero = document.getElementById("double-zero");
// Initalizing variables
let result = "";
let operation = "";
let previousOperand = 0;

// Funciton to append number
const appendNumber = (number) => {
  if (number === "." && result.includes(".")) return;
  result += number;
  updateDisplay();
};

// Function to update display
const updateDisplay = () => {
  if (operation) {
    resultElement.innerText = `${previousOperand} ${operation} ${result}`;
  } else {
    resultElement.innerText = result;
  }
};

// Function to select operator
const selectOperator = (operatorValue) => {
  if (result === "") return;
  if (operation !== "" && previousOperand !== "") {
    calculateResult();
  }
  operation = operatorValue;
  previousOperand = result;
  result = "";
  updateDisplay();
};

// Function to calculate
const calculateResult = () => {
  let evaluatedResult;
  const previous = parseFloat(previousOperand);
  const current = parseFloat(result);

  if (isNaN(previous) || isNaN(current)) result;

  switch (operation) {
    case "/":
      evaluatedResult = previous / current;
      break;
    case "*":
      evaluatedResult = previous * current;
      break;
    case "-":
      evaluatedResult = previous - current;
      break;
    case "+":
      evaluatedResult = previous + current;
      break;
    case "%":
      evaluatedResult = (previous / 100) * current;
      break;
    default:
      return;
  }
  result = evaluatedResult.toString();
  operation = "";
  previousOperand = "";
};

// Function to delete last digit
const deleteLastDigit = () => {
  if (result === "") return;
  result = result.slice(0, -1);
  updateDisplay();
};
// Function to clear display
const clearDisplay = () => {
  result = "";
  previousOperand = "";
  operation = "";
  updateDisplay();
};

// Add event listener to number buttons
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

decimalBtn.addEventListener("click", () => appendNumber("."));
clearBtn.addEventListener("click", () => clearDisplay());
deleteBtn.addEventListener("click", () => deleteLastDigit());
doubleZero.addEventListener("click", () => appendNumber(""));
percentBtn.addEventListener("click", () => selectOperator("%"));
divideBtn.addEventListener("click", () => selectOperator("/"));
multiplyBtn.addEventListener("click", () => selectOperator("*"));
subtractBtn.addEventListener("click", () => selectOperator("-"));
additionBtn.addEventListener("click", () => selectOperator("+"));
equalBtn.addEventListener("click", () => {
  if (result === "") return;
  calculateResult();
  updateDisplay();
});
// additionBtn.addEventListener("click", () => selectOperator("+"));
// additionBtn.addEventListener("click", () => selectOperator("+"));

// if (e.target.innertHTML == "=") {
//   string = eval(string);
//   input.value = string;
// } else if (e.target.innerHTML == "AC") {
//   string = "";
//   input.value = string;
// } else if (e.target.innerHTML == "DEL") {
//   string = string.substring(0, string.length - 1);
//   input.value = string;
// } else {
//   string += e.target.innerHTML;
//   input.value = string;
// }
// return string;
