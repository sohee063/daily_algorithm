function solution(s) {
  let res = "";
  s.split(" ").map((el) => {
    if (el === " ") {
      res += " ";
    }
    [...el].map((item, idx) => {
      if (!(idx % 2)) {
        res += item.toUpperCase();
      } else if (idx % 2) {
        res += item.toLowerCase();
      }
    });
    res += " ";
  });
  return [...res].slice(0, -1).join("");
}
