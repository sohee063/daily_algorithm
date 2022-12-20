function solution(number, limit, power) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (!(i % j)) {
        count++;
      }
    }
    arr.push(count + 1);
  }
  return arr
    .map((el) => {
      return el > limit ? power : el;
    })
    .reduce((a, b) => a + b);
}
