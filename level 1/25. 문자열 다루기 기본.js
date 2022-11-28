function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s
      .split("")
      .map((el) => typeof Number(el) === "number")
      .includes(false)
      ? false
      : true;
  }
  return false;
}
