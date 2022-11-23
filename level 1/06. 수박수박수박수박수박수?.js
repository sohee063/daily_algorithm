function solution(n) {
  let word = ["수", "박"];
  let answer = "";

  let i = 0;

  while (i < n) {
    answer += word[i % 2 ? 1 : 0];
    i++;
  }
  return answer;
}
