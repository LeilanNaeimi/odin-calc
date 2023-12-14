let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    const result = evaluateExpression(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function evaluateExpression(expression) {
  //regular expression
  const operators = /[+\-*\/]/;
  // console.log(operators);
  const parts = expression.split(operators);
  // console.log(parts);
  const operand1 = parseFloat(parts[0]);
  // console.log(operand1);
  const operand2 = parseFloat(parts[1]);
  // console.log(operand2);
  const operator = expression.match(operators)[0];
  // console.log(operator);

  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      if (operand2 === 0) {
        throw new Error("Division by zero");
      }
      return operand1 / operand2;
    default:
      throw new Error("Error");
  }
}

function clearDisplay() {
  display.value = "";
}
