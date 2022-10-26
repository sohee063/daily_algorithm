function solution(n) {
  let max = (a, b) => (a % b === 0 ? b : max(b, a % b));
  let gcd = max(n, 6);
  return n / gcd;
}
