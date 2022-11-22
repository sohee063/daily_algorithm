function solution(s1, s2) {
  let answer = 0;
  s1.map((el) =>
    s2.map((item) => {
      item === el && answer++;
    })
  );
  return answer;
}

/*
map을 이중으로 돌려 같은 값이면 answer을 +1 해주었다.
*/
