function solution(my_string) {
  let answer = my_string.toUpperCase();
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    answer[i] === my_string[i]
      ? (result += my_string[i].toLowerCase())
      : (result += my_string[i].toUpperCase());
  }
  return result;
}

/*
my_string을 전부 대문자로 바꾼 후(answer) 두 문자열을 비교하여 대/소문자로 변환해주었다.
*/
