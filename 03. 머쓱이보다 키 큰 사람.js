/* filter 메서드를 사용하여 array 배열의 값 중 height 값보다 큰 값들을 구하였다. */

function solution(array, height) {
  let answer = array.filter((el) => el > height);
  return answer.length;
}
