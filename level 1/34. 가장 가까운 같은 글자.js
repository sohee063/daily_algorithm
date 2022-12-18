function solution(s) {
  let answer = [];
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - obj[s[i]]);
    }
    obj[s[i]] = i;
  }
  return answer;
}
