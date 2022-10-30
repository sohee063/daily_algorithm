function solution(emergency) {
  let answer = [...emergency].sort((a, b) => b - a);
  return emergency.map((el) => answer.indexOf(el) + 1);
}

/*
emergency 배열을 내림차순으로 sort한 후 배열을 index+1로 대체한다.
*/
