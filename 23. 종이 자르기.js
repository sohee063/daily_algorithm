function solution(M, N) {
  return M * N - 1;
}

/*
종이를 겹쳐 자를 수 없기 때문에 M*N-1을 해주었다.
*/

function solution(quiz) {
  let answer = quiz.map((el) => el.split(" = "));
  let test = answer.map((el) =>
    el.map((item) =>
      item.split(" ").map((v) => {
        if (toString(v) !== "-" || toString(v) !== "+") return Number(v);
      })
    )
  );
  console.log(test);

  // console.log(answer[0][0].split(" ").join(""));
  // return answer;
}
