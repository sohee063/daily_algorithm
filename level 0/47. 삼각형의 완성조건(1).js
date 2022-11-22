function solution(sides) {
  let answer = Math.max(...sides);
  sides[sides.indexOf(answer)] = 0;
  let others = sides.reduce((a, b) => a + b);
  return answer < others ? 1 : 2;
}


/*
max값을 골라낸 후 나머지 값들을 더한 값과 비교하여 리턴해주었다.
*/