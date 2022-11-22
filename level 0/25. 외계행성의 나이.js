function solution(age) {
  let answer = "";
  let alphabet = "abcdefghij";
  [...String(age)].map((el) => {
    answer += alphabet[el];
  });
  return answer;
}

/*
알파벳을 나열한 후 age의 값에 맞게 인덱스 값으로 대치해주었다.
*/