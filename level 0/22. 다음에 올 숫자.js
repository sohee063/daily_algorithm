function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    return common[1] - common[0] + common[common.length - 1];
  } else {
    return (common[1] / common[0]) * common[common.length - 1];
  }
}

/*
반복문 안에서 등차수열과 등비수열 조건으로 분기하여 풀었다.
*/
