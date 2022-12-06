function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [distanceA, distanceB] = [Math.abs(a - n), Math.abs(b - n)];
    if (distanceA === distanceB) return b - a;
    return distanceB - distanceB;
  });
}
