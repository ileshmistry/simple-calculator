let number1 = document.getElementById("number-1");
let number2 = document.getElementById("number-2");
let result = document.getElementById("result");

function getValue(element) {
  return element.value;
}

function add() {
  result.value = parseInt(getValue(number1)) + parseInt(getValue(number2));
}

function subtract() {
  result.value = parseInt(getValue(number1)) - parseInt(getValue(number2));
}

function divide() {
  result.value = parseFloat(getValue(number1)) / parseFloat(getValue(number2));
}

function multiply() {
  result.value = parseInt(getValue(number1)) * parseInt(getValue(number2));
}

function reset() {
  number1.value = "0";
  number2.value = "0";
  result.value = "0";
}
