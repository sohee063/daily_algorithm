function solution(lines) {
  let arr = [];
  let allLines = [];
  let whole = [];
  let count = 0;
  let resObj = {};
  for (let i = 0; i <= 2; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      arr.push(`${j}${j + 1}`);
    }
  }

  lines.map((el) => el.map((item) => allLines.push(item)));

  let max = Math.max(...allLines);
  let min = Math.min(...allLines);

  for (let i = min; i < max; i++) {
    whole.push(`${i}${i + 1}`);
  }

  for (let i = 0; i < arr.length; i++) {
    if (!resObj[arr[i]]) {
      resObj[arr[i]] = 1;
    } else {
      resObj[arr[i]]++;
    }
  }

  for (let i in resObj) {
    resObj[i] >= 2 && count++;
  }

  return count;
}
