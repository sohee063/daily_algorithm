function solution(n) {
  let i = 1;
  let answer = [];
  while (i <= n) {
    answer.push(i);
    i = i + 2;
  }
  return answer;
}

/* 
짝수를 배제해야하므로 i의 초기값을 1로 주었다.
i가 n이하일 때 까지만 i에 +2를 하면서 answer 배열에 push 해주었다.
*/
