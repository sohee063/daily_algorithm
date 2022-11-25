function solution(n) {
  let i = 1;
  let arr = 0;
  while (i <= n) {
    if (n % i === 0) {
      arr += i;
    }
    i++;
  }
  return arr;
}
