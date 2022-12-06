function solution(n, arr1, arr2) {
  function toBinary(arr) {
    return arr.map((el) => {
      if (el.toString(2).length < n) {
        return "0".repeat(n - el.toString(2).length) + el.toString(2);
      } else {
        return el.toString(2);
      }
    });
  }

  let firstArr = toBinary(arr1);
  let secondArr = toBinary(arr2);

  let str = "";
  let arr = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (Number(firstArr[i][j]) || Number(secondArr[i][j])) {
        str += "#";
      } else {
        str += " ";
      }
    }
    arr.push(str);
    str = "";
  }

  return arr;
}
