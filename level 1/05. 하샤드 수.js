function solution(x) {
  let num = [...(x + "")].reduce((a, b) => Number(a) + Number(b));
  return x % num === 0;
}
