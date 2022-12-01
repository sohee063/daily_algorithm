function solution(num) {
  let i = 0;
  let count = 0;
  while (i <= 500) {
    if (num === 1) return count;
    if (num % 2) {
      num = num * 3 + 1;
      count++;
    } else if (!(num % 2)) {
      num = num / 2;
      count++;
    }
    i++;
  }

  return -1;
}
