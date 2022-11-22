function solution(n) {
  let max = (a, b) => (a % b === 0 ? b : max(b, a % b));
  let gcd = max(n, 6);
  return n / gcd;
}

/* n명과 6조각의 최대공약수를 구한 후 n명을 최대공약수로 나눠주었다. */

