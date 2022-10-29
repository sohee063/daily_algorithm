function solution(quiz) {
  return quiz.map((el) => {
    const [left, right] = el.split(" = ");
    return eval(left) === +right ? "O" : "X";
  });
}

/*
구조분해할당으로 좌변,우변으로 식을 분리 한 후 eval() 메서드를 사용하여 좌변을 계산 후 우변과 비교하였다.
*/
