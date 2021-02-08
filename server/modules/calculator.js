// document call
$(document).ready(onReady);

// preset variable for functionality test
let spiderMan = true;

// jQuery active functions and rules
function onReady() {
  console.log(`JQuery: ${spiderMan}`);

  // call the math function based on button pressed
  $(document).on('click', '#button_plus', clientCalculator);
  //clientCalculator();
}

// calculator function
function clientCalculator(num1, num2) {
  //console.log('clientCalculator function', spiderMan);
  num1 = $('#input_number1').val();
  num2 = $('#input_number2').val();
  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;
  let quotient = num1 / num2;
  // when the value is clicked return that sum
  if ($('value') === '+') {
    return sum;
  } else if ($('value') === '-') {
    return difference;
  } else if ($('value') === '*') {
    return product;
  } else if ($('value') === '/') {
    return quotient;
  }
}
