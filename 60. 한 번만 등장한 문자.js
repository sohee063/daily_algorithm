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

/*
answer 객체에 key값은 s의 알파벳, value는 등장 횟수를 할당해주었다.
그 후 value가 1인 key값을 result에 할당하여 리턴해주었다.
*/