function solution(n) {
  let answer = {};
  let result = [];
  for (let i = 4; i <= n; i++) {
    for (let k = 1; k <= n; k++) {
      if (i % k === 0) {
        !answer[i] ? (answer[i] = 1) : answer[i]++;
      }
    }
  }
  for (let i in answer) {
    if (answer[i] >= 3) {
      result.push(i);
    }
  }
  return result.length;
}

/*
n을 1부터 n까지의 수로 나누었을 때 나머지가 0인 값들을 answer 객체에 추가해주었다.
최종적으로 answer객체에 3이상의 값을 가진 Key값만 result 배열에 넣어주었고
result배열의 길이를 return 해주었다.
*/
