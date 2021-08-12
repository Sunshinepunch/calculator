//business time logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

//user logic

$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#subtract1").val());
    const number2 = parseInt($("#subtract2").val());
    const result2 = subtract(number1, number2);
    $("#output2").text(result2);
  });

  $("form#multiply").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#multiply1").val());
    const number2 = parseInt($("#multiply2").val());
    const result3 = multiply(number1, number2);
    $("#output3").text(result3);
  });

  $("form#divide").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("#divide2").val());
    const result4 = divide(number1, number2);
    $("#output4").text(result4);
  });
});
