function solution(n) {
  let i = 1;
  let answer = [];
  while (i <= n) {
    n % i === 0 && answer.push(i);
    i++;
  }
  return answer;
}
