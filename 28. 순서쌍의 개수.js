function solution(n) {
  let answer = 0;
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      answer++;
    }
    i++;
  }
  return answer;
}

/*
n을 1부터 n까지의 수로 나누면서 나머지가 0이 되는 수가 있을 때마다 answer의 카운트를 1만큼 늘려준다.
이 작업을 n만큼 반복문 돌린다.
*/

function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());
