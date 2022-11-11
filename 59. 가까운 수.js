function solution(array, n) {
  let answer = array.sort((a, b) => a - b);
  let arr = [];
  answer.map((el) => arr.push(Math.abs(el - n)));
  return answer[arr.indexOf(Math.min(...arr))];
}

/*
[3,10,28,12]
먼저 주어진 배열을 내림차순으로 sort 후
*/
