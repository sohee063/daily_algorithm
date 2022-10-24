/* 내가 푼 방법 */
function solution(numbers) {
  let answer = [];
  for (let i in numbers) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

/* 다른 사람들이 푼 방법
reduce와 map을 사용하였다.
프로젝트때는 map과 매우 친했었는데 알고리즘에서는 왜 손이 가지 않을까... 익숙해져야 겠다.
*/

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

const solution = (numbers) => numbers.map((number) => number * 2);
