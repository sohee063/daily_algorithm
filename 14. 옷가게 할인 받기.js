function solution(price) {
  switch (true) {
    case price >= 100000 && price < 300000:
      return ~~(price * 0.95);
    case price >= 300000 && price < 500000:
      return ~~(price * 0.9);
    case price >= 500000:
      return ~~(price * 0.8);
    default:
      return price;
  }
}

/* 
switch 문으로 조건을 분기하여 옷 가격의 할인율을 계산하였다.
할인 적용된 금액에서 소수점을 버려야 했기 때문에 처음에는 parseInt를 사용하였지만,
서칭 결과 ~~ 연산자의 존재를 알게 되었고 이는 Math.floor()와 동일하게 쓰인다고 한다.
그래서 ~~ 연산자로 테스트 해 본 결과 통과하였다.
❗️ 하지만 가독성이 떨어질 수 있으니 주의 하자!!
*/
