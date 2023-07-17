
var a = parseInt(prompt("Enter a number, 'a':"));

// Initialize starting value
var number = 1;

// Array to store the series
var series = [];

// Generate the series
while (number <= a) {
  series.push(number);
  number += 2;
}

// Display the series
var output = series.join(", ");
console.log(output);
