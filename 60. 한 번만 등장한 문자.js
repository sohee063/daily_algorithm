function solution(s) {
  let answer = {};
  let result = "";
  for (let i of s) {
    answer[i] === undefined ? (answer[i] = 1) : answer[i]++;
  }
  for (let i in answer) {
    if (answer[i] === 1) result += i;
  }
  return [...result].sort().join("");
}
