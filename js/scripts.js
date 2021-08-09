function add(number1, number2) {
	return number1 + number2;
}

function divide(number1,number2){
  return number1 / number2;
}

function multiply(number1,number2){
  return number1 * number2;
}

function subtract(number1,number2){
  return number1 - number2;
}

function fartocel(number1) {
  return (number1 - 32)* 5/9;
}

function galtolit(number1) {
  return (number1 * 3.785);
}

function ouncetogram(number1) {
  return (number1 * 28.35);
}

const number1 = parseInt(prompt("Enter degrees in farenheit:"));

const result = fartocel(number1).toFixed(2) + " degrees Celsius";

alert(result)

