function solution(my_string) {
  let word = ["a", "e", "i", "o", "u"];
  let answer = "";
  my_string.split("").map((el) => {
    if (!word.includes(el)) answer += el;
  });
  return answer;
}
