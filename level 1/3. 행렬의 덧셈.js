function solution(arr1, arr2) {
  let firstArr = [];
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      firstArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(firstArr);
    firstArr = [];
  }
  return answer;
}
