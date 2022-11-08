function solution(num_list, n) {
  let answer = [];
  function doubleArr(arr, n) {
    if (arr.length === 0) return;
    let item = arr.splice(0, n);
    answer.push(item);
    return doubleArr(arr, n);
  }
  doubleArr(num_list, n);

  return answer;
}


/*
재귀함수를 사용하여 num_lis를 n개 만큼 answer에 push 해주었다.
*/