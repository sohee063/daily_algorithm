function solution(num, k) {
  let arr = num.toString().split("");
  return arr.includes(String(k)) ? arr.indexOf(String(k)) + 1 : -1;
}
