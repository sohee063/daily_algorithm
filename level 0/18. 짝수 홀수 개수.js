function solution(num_list) {
  let answer = [0, 0];
  for (let i of num_list) {
    i % 2 === 0 ? (answer[0] += 1) : (answer[1] += 1);
  }
  return answer;
}

/*
answer 초기 배열 설정 해 준 후 짝수, 홀수 일 때마다 값 +1을 해주었다.
*/

/* 다른 사람 풀이 인데 answer[a%2]로 짝수,홀수를 표현한 부분이 매우 인상적이었다...*/
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
