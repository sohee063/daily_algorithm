function solution(n, t) {
  let i = 1;
  let answer = n;
  while (i <= t) {
    answer *= 2;
    i++;
  }
  return answer;
}
