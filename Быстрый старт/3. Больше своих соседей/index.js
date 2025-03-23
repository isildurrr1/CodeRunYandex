const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", (input) => {
  const numbers = input.split(" ").map(Number);
  let result = 0;
  for(let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
      result++
    }
  }
  console.log(result);
  rl.close();
});