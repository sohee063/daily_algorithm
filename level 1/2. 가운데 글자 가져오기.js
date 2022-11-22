function solution(s) {
  let middle = ~~(s.length / 2);
  return s.length % 2 === 0 ? `${s[middle - 1]}${s[middle]}` : s[middle];
}
