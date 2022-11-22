function solution(sides) {
  let maxNum = Math.max(...sides);
  let minNum = Math.min(...sides);
  let i = maxNum - minNum;
  let answer = [];
  while (maxNum + minNum - 1 > i) {
    i++;
    answer.push(i);
  }
  return answer.length;
}
