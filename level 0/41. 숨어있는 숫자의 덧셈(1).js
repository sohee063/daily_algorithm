function solution(my_string) {
  return [...my_string]
    .filter((el) => !isNaN(el))
    .reduce((a, b) => Number(a) + Number(b));
}
