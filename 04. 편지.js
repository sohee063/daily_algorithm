/* split 메서드로 message의 글자 하나하나를 배열에 채워넣고 그 length를 구해 곱하기 2를 해주었다. */

function solution(message) {
  let answer = message.split("");
  return answer.length * 2;
}
