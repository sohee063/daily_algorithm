function solution(n) {
  let i = 1;

  function fac(num) {
    if (num === 1) return 1;
    return num * fac(num - 1);
  }

  while (fac(i) <= n) {
    i++;
    fac(i);
  }
  return i - 1;
}

/*
팩토리얼 문제가 나오면 무조건 재귀함수를 써야지! 하는 생각이 코드를 더 복잡하게 만들었다.
다른 사람 풀이를 보면 while문 하나로 문제를 해결하는 경우가 있어서 코드를 참조해왔다.
*/

function solution(n) {
  let res = 1;
  let i = 0;

  while (res <= n) {
    i++;
    res *= i;
  }
  return i - 1;
}
