function solution(food) {
  let res = "";
  food.map((el, idx) => {
    if (idx > 0) {
      res += idx.toString().repeat(~~(el / 2));
    }
  });
  return `${res}0${[...res].reverse().join("")}`;
}
