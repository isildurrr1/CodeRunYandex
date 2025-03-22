const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []
rl.on('line', (line) => {
  input.push(Number(line));
  if (input.length === 3) {
    const [a, b, c] = input; 
    console.log(a + b > c && a + c > b && b + c > a ? "YES" : "NO");
    rl.close();
  }
})