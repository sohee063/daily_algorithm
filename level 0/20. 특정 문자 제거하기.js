function solution(my_string, letter) {
  return [...my_string].filter((el) => el !== letter).join("");
}

/*
filter메서드를 사용하여 특정 문자 'letter'를 제외한 문자열을 리턴하였다.
*/

function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}

/*
다른사람 풀이인데 split 메서드의 사용은 엄청 신박했다.
타인의 코드를 보면서 많이 배우는 요즘이다... 
 */
