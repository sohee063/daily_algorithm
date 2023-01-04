function solution(s) {
  let arr = s.split(" ");
  let answerArr = [];
  for (let i = 0; i < arr.length; i++) {
    let lower = arr[i].toLowerCase();
    console.log(lower);
    if (lower === "") {
      answerArr.push(lower);
    } else {
      answerArr.push(lower.replace(lower[0], lower[0].toUpperCase()));
    }
  }
  return answerArr.join(" ");
}
