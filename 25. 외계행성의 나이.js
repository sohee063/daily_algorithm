function solution(age) {
  let answer = "";
  let alphabet = "abcdefghij";
  [...String(age)].map((el) => {
    answer += alphabet[el];
  });
  return answer;
}
