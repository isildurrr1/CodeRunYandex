const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fibo = (number) => {
  if (number === 1 || number === 2) return 1;
  return fibo(number - 1) + fibo(number - 2);
};

rl.question("", (input) => {
  const number = Number(input);
  let result = 0;
  let index = 1;
  while (index <= number) {
    result += fibo(index);
    index++;
  }
  console.log(result);
  rl.close();
});
