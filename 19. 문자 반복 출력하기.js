function solution(my_string, n) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
}

/*
내키진 않았지만 이중 for문으로 문제를 해결하였다...
repeat()을 알기 전까진... 
 */

function solution(my_string, n) {
  let answer = [...my_string].map((el) => el.repeat(n)).join("");
  return answer;
}
