// document call
$(document).ready(onReady);

// preset variable for functionality test
let spiderMan = true;

// jQuery active functions and rules
function onReady() {
  console.log(`JQuery: ${spiderMan}`);

  // call the math function based on button pressed
  clientCalculator();
}

function clientCalculator() {
  console.log('inside the clientCalculator', spiderMan);
}
