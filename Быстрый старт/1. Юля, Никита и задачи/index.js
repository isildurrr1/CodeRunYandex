const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  const numbers = input.split(" ").map(Number);
  const sum = numbers.reduce((acc, num) => acc += num);
  console.log(sum);
  rl.close();
});
