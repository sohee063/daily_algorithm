function solution(s) {
  let same = 1;
  let def = 0;
  let str = s[0];
  let temp = s[0];

  for (let i = 1; i < s.length; i++) {
    if ((same === 0 && def === 0) || same !== def) {
      if (temp !== s[i]) {
        def++;
      } else {
        same++;
      }
    } else if (same === def && same > 0 && def > 0) {
      temp = s[i];
      str += " ";
      same++;
    }
    str += s[i];
  }
  return str.split(" ").length;
}
