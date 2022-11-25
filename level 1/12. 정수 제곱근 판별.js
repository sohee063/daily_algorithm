function solution(n) {
  let i = 0;
  while (i * i < n) {
    i++;
    if (i * i === n) {
      return (i + 1) * (i + 1);
    }
  }
  return -1;
}
