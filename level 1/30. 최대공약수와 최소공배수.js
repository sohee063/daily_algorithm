function solution(n, m) {
  function gcd(a, b) {
    const remain = a % b;
    if (remain === 0) return b;
    return gcd(b, remain);
  }

  let min = gcd(n, m);
  let max = (n * m) / min;

  return [min, max];
}
