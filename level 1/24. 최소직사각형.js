function solution(sizes) {
  let max = [];
  let min = [];
  sizes.map((el) => {
    max.push(Math.max(...el));
    min.push(Math.min(...el));
  });
  return Math.max(...max) * Math.max(...min);
}
