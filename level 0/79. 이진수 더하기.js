function solution(bin1, bin2) {
  let rev1 = [...bin1].reverse();
  let rev2 = [...bin2].reverse();
  let res1 = 0;
  let res2 = 0;

  for (let i = 0; i < bin1.length; i++) {
    res1 += Number(rev1[i] * 2 ** i);
  }
  for (let i = 0; i < bin2.length; i++) {
    res2 += Number(rev2[i] * 2 ** i);
  }

  let sum = res1 + res2;
  let answer = "";

  if (res1 === 0 || res2 === 0) {
    answer = "0";
  }

  while (sum >= 1) {
    if (sum === 0) return 0;
    answer += sum % 2;
    sum = ~~(sum / 2);
  }
  return [...answer].reverse().join("");
}
