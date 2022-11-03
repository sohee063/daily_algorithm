function solution(rsp) {
  let answer = "";
  let win = { 2: "0", 0: "5", 5: "2" };
  for (let i of rsp) {
    answer += win[i];
  }
  return answer;
}

/* 
이길 수 있는 조건들을 객체 형태로 저장하였다.
그 후 rsp 인덱스값을 win객체의 키에 대입하여 값을 얻고, 정답을 리턴해주었다.
*/
