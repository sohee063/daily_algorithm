function solution(s) {
  let arr = Array(s.length).fill("");
  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
    } else {
      arr[i] = s[i];
    }
  }
  return arr.filter((el) => el !== "");
}
