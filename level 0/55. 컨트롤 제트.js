function solution(s) {
  s = s.split(" ");
  while (s.includes("Z")) {
    s.splice(s.indexOf("Z") - 1, 2);
  }
  return s.reduce((a, b) => a + Number(b), 0);
}


/*
s 배열값이 Z이면 splice 메서드를 사용하여 바로 앞 인덱스부터 2개를 제거하였다.
s 배열이 더이상 Z를 포함하지 않을때까지 반복문을 돌렸다.
마지막으로 배열의 남은 숫자들을 더해준 값을 리턴하였다.
*/