function solution(my_string) {
  let answer = my_string.split(" ");
  let number = answer.filter((el) => el !== "+" && el !== "-");
  let etc = answer.filter((el) => el === "+" || el === "-");
  let res = Number(number[0]);

  for (let i = 0; i < etc.length; i++) {
    if (etc[i] === "+") {
      res += Number(number[i + 1]);
    } else {
      res -= Number(number[i + 1]);
    }
  }
  return res;
}
