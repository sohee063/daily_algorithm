function solution(s) {
  let wordP = [...s.toLowerCase()].filter((el) => el === "p");
  let wordY = [...s.toLowerCase()].filter((el) => el === "y");

  return wordP.length === wordY.length;
}
