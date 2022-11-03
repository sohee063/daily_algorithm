function solution(keyinput, board) {
  const answer = [0, 0];
  let boardWidth = board[0] / 2;
  let boardHeight = board[1] / 2;

  for (let i of keyinput) {
    switch (i) {
      case "left":
        if (-answer[0] < boardWidth - 1) answer[0]--;
        break;
      case "right":
        if (answer[0] < boardWidth - 1) answer[0]++;
        break;
      case "up":
        if (answer[1] < boardHeight - 1) answer[1]++;
        break;
      case "down":
        if (-answer[1] < boardHeight - 1) answer[1]--;
        break;
    }
  }

  return answer;
}

/*
board 크기의 범위를 벗어나지 않는 조건에서 좌표를 이동시켜주었다.
*/
