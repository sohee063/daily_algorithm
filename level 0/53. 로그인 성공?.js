function solution(id_pw, db) {
  let answer = "fail";
  [...db].map((el) => {
    id_pw[0] === el[0] && id_pw[1] === el[1] && (answer = "login");
    id_pw[0] === el[0] && id_pw[1] !== el[1] && (answer = "wrong pw");
  });
  return answer;
}
