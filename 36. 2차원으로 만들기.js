function solution(num_list, n) {
  var answer = [];
  function doubleArr(arr, n) {
    if (arr.length === 0) return;
    let item = arr.splice(0, n);
    answer.push(item);
    return doubleArr(arr, n);
  }

  doubleArr(num_list, n);

  return answer;
}
