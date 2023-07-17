const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const multiples = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const countArray = new Array(multiples.length).fill(0);

for (const number of numbers) {
  for (let i = 0; i < multiples.length; i++) {
    if (number % multiples[i] === 0) {
      countArray[i]++;
    }
  }
}

let result = "{";
for (let i = 0; i < multiples.length; i++) {
  result += multiples[i] + ": " + countArray[i];
  if (i !== multiples.length - 1) {
    result += ", ";
  }
}
result += "}";

console.log(result);