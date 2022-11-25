function solution(a, b, n) {
  let myCoke = 0;

  while (true) {
    if (n < a) {
      break;
    }
    myCoke += ~~(n / a) * b;
    let res = n % a;
    n = ~~(n / a) * b + res;
  }
  return myCoke;
}
