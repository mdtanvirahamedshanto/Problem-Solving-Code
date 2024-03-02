const readline = require("readline");

function computeCycleLength(n) {
  let count = 1;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    count++;
  }
  return count;
}

function maximumCycleLength(i, j) {
  let maxCycleLength = 0;
  for (let num = Math.min(i, j); num <= Math.max(i, j); num++) {
    const cycleLength = computeCycleLength(num);
    if (cycleLength > maxCycleLength) {
      maxCycleLength = cycleLength;
    }
  }
  return maxCycleLength;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputPairs = [];

rl.on("line", (input) => {
  inputPairs.push(input.trim());
});

rl.on("close", () => {
  for (const pair of inputPairs) {
    const [i, j] = pair.split(" ").map(Number);
    const maxCycle = maximumCycleLength(i, j);
    console.log(`${i} ${j} ${maxCycle}`);
  }
});
