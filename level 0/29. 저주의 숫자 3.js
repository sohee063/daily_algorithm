function solution(n) {
  let answer = [1];
  let i = 1;
  while (answer.length < n) {
    i++;
    if (i % 3 !== 0 && !(i + "").includes(3)) {
      answer.push(i);
    }
  }
  return answer.pop();
}

/*
초기값 1을 가지고 있는 answer 배열을 생성 후 길이가 n과 같아질 때 까지
3의 배수가 아니면서 3을 포함하지 않는 숫자를 push 해주었다.

그 후, 마지막 배열값을 리턴해주었다.
*/
