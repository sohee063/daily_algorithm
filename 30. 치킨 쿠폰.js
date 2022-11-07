function solution(chicken) {
  let answer = 0;
  while (chicken >= 10) {
    let orderChicken = ~~(chicken / 10);
    let couponChicken = ~~(chicken % 10);
    chicken = orderChicken + couponChicken;
    answer += orderChicken;
  }
  return answer;
}

/*
처음 짠 로직이 한 케이스만 통과가 되지 않아서
한참 고민하다가 다른 사람 풀이를 참고해서 다시 구현해보았다.

10마리 주문마다 치킨 수를 +1 해주었다.
*/
