function solution(sides) {
  let answer = Math.max(...sides);
  sides[sides.indexOf(answer)] = 0;
  let others = sides.reduce((a, b) => a + b);
  return answer < others ? 1 : 2;
}
