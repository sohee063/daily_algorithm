function solution(hp) {
  let ant = [5, 3, 1];
  let answer = [];

  for (let i of ant) {
    answer.push(~~(hp / i));
    hp %= i;
  }
  return answer.reduce((a, b) => a + b);
}

/*
ant 배열에 개미 공격력을 나열한 후, hp를 배열 인덱스 별로 나누어 answer에 push 하였다.
answer 배열값을 모두 더한 값을 리턴해 주었다.

예를 들어 hp가 102 이었다면, answer 은 [20, 0, 2] 가 된다.
*/
