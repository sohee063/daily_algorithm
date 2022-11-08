function solution(numbers) {
  let answer = "";
  let res = "";
  let alphabet = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i of numbers) {
    answer += i;
    if (alphabet.includes(answer)) {
      res += alphabet.indexOf(answer);
      answer = "";
    }
  }
  return Number(res);
}

/*
answer이라는 변수에 numbers의 단어를 한글자씩 채워 answer값이 alphabet 배열의 값에 포함되어 있으면 
res에 해당하는 alphabet 인덱스 값을 추가해주어 리턴하였다.
*/
