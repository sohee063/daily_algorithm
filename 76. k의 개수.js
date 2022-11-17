function solution(i, j, k) {
  let arr = [];
  let count = 0;
  for (let el = i; el <= j; el++) {
    arr.push(el);
  }

  arr.map((el) => {
    [...String(el)].map((item) => {
      item === String(k) && count++;
    });
  });

  return count;
}
