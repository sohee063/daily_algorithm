function solution(array, n) {
  let answer = array.sort((a, b) => a - b);
  let arr = [];
  answer.map((el) => arr.push(Math.abs(el - n)));
  return answer[arr.indexOf(Math.min(...arr))];
}

/*
[3, 10, 28, 12]이 array로 주어졌을 때 이 배열을 내림차순으로 sort 후
arr 빈 배열에 n을 뺀 값 절대값을 push 해주었다.

가장 가까운 수가 여러개일 경우 더 작은 수를 리턴해야 하므로,
주어진 값과 일치하는 첫번째 인덱스를 반환하는 indexOf 메서드를 사용하여 
내림차순으로 sort 해주었던 배열에서 인덱스 값을 찾아 답을 리턴해주었다.
*/
