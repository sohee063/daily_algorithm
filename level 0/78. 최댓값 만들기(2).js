function solution(my_string) {
  let result = [];
  for (let i = 0; i < my_string.length - 1; i++) {
    for (let j = i + 1; j < my_string.length; j++) {
      result.push(my_string[i] * my_string[j]);
    }
  }
  return Math.max(...result);
}
