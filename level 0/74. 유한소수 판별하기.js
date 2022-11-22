function solution(a, b) {
  for (let i = a; i >= 2; i--) {
    if (b % i === 0 && a % i === 0) {
      b = b / i;
      break;
    }
  }

  let i = b;
  if (b === 1) return 1;

  while (i % 2 === 0 || i % 5 === 0) {
    if (i % 2 === 0) {
      i = i / 2;
    } else if (i % 5 === 0) {
      i = i / 5;
    }
  }

  return i > 1 ? 2 : 1;
}
