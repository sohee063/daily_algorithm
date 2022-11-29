function solution(strings, n) {
  let arr = [];
  let sortN = strings
    .sort()
    .map((el) => el[n])
    .sort();

  for (let i = 0; i < sortN.length; i++) {
    for (let j = 0; j < sortN.length; j++) {
      if (sortN[i] === strings[j][n]) {
        arr.push(strings[j]);
      }
    }
  }

  const set = new Set(arr);

  return [...set];
}
