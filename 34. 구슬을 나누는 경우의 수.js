function fac(num) {
  if (num === 0) return 1;
  return num * fac(num - 1);
}

function solution(balls, share) {
  return Math.round(fac(balls) / (fac(balls - share) * fac(share)));
}

/*
factorial 연산을 재귀함수로 구현해주었다.
*/
