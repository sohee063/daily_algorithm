function solution(box, n) {
  return box.map((el) => ~~(el / n)).reduce((a, b) => a * b);
}

/*
주사위는 상자와 평행하게 넣어야하므로 상자의 가로, 세로, 높이를 주사위의 모서리 길이로 나눈 후 곱해주었다.
*/
