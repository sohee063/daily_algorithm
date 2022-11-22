const readline = require("readline");
const { fileURLToPath } = require("url");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let num = input[0];
  for (let i = 1; i <= num; i++) console.log("*".repeat(i));
});
