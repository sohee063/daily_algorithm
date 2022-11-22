function solution(n) {
  let i = 1;
  let res;
  while (i * i < n) {
    i++;
  }
  i * i === n ? (res = 1) : (res = 2);
  return res;
}
