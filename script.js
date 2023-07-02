let displayValue = "";

function addNumber(number) {
  displayValue += number;
  updateDisplay();
}

function addOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Erro";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
